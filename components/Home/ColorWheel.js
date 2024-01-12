import React, { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";
import { Theme } from "@/utils/Theme";

let renderer;
let clock = new THREE.Clock();

export default function ColorWheel() {
  const { state, dispatch } = useContext(Theme);

  const [scene, setScene] = useState(undefined);
  const [camera, setCamera] = useState(undefined);
  const [updated, setUpdated] = useState(false);
  const [dimension, setDimension] = useState(600.0);
  let canvasRef = useRef(null);

  const fullConfig = resolveConfig(tailwindConfig);

  const resize = () => {
    if (window?.innerWidth < Number(fullConfig.theme.screens.lg.slice(0, -2))) {
      setDimension(300);
    } else {
      setDimension(600);
    }
  };

  useEffect(() => {
    if (window?.innerWidth < Number(fullConfig.theme.screens.lg.slice(0, -2))) {
      setDimension(300);
    } else {
      setDimension(600);
    }

    window?.addEventListener("resize", resize);
  }, []);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector2(dimension, dimension) },
      iBG: { value: new THREE.Vector3(51 / 256, 65 / 256, 85 / 256) },
    },

    vertexShader: `
  varying vec2 vUv;

  	void main()	{

  		vUv = uv;

  		gl_Position = vec4( position, 1.0 );

  	}`,
    fragmentShader: `
        varying vec2 vUv;

  			uniform float iTime;
  			uniform vec2 iResolution;
  			uniform vec3 iBG;

  			void main()	{
          vec2 p = (2.0*gl_FragCoord.xy-iResolution.xy)/iResolution.y;
          float tau = 3.1415926535*2.0;
          float a = atan(p.x,p.y);
          float r = length(p)*1.0;
          vec2 uv = vec2(a/tau,r);

        //get the color
        float xCol = (uv.x - (iTime / 3.0)) * 3.0;
        xCol = mod(xCol, 3.0);
        vec3 horColour = vec3(0.25, 0.25, 0.25);

        if (xCol < 1.0) {

          horColour.r += 1.0 - xCol;
          horColour.g += xCol;
        }
        else if (xCol < 2.0) {

          xCol -= 1.0;
          horColour.g += 1.0 - xCol;
          horColour.b += xCol;
        }
        else {

          xCol -= 2.0;
          horColour.b += 1.0 - xCol;
          horColour.r += xCol;
        }

        // draw color beam
        uv = (2.0 * uv) - 1.0;
        float beamWidth = (0.7+0.5*cos(uv.x*10.0*tau*0.15*clamp(floor(5.0 + 10.0*cos(iTime)), 0.0, 10.0))) * abs(1.0 / (30.0 * uv.y));
        vec3 horBeam = vec3(beamWidth);

        if(horBeam.r < 0.25 && horBeam.g < 0.25 && horBeam.b < 0.25){
          horBeam = iBG;
          horColour = vec3(1.0);
        }

        gl_FragColor = vec4((( horBeam) * horColour), 1.0);
  			}
  `,
  });

  let flatShape = new THREE.Shape([
    new THREE.Vector2(-1.0, -1.0),
    new THREE.Vector2(1.0, -1.0),
    new THREE.Vector2(1.0, 1.0),
    new THREE.Vector2(-1.0, 1.0),
  ]);

  let geometry = new THREE.ShapeGeometry(flatShape);

  let cube = new THREE.Mesh(geometry, material);

  useEffect(() => {
    let color = new THREE.Color();

    if (state.darkMode.dark) {
      color.r = 51 / 256;
      color.g = 65 / 256;
      color.b = 85 / 256;
    } else {
      color.r = 226 / 256;
      color.g = 232 / 256;
      color.b = 240 / 256;
    }

    cube.material.uniforms.iBG.value.set(color.r, color.g, color.b);
    cube.material.uniformsNeedUpdate = true;

    console.log(color, cube.material);
  }, [state]);

  function update() {
    setUpdated(true);
    requestAnimationFrame(update);

    cube.material.uniforms.iTime.value = clock.getElapsedTime();
    cube.material.uniforms.iResolution.value = [dimension, dimension];

    renderer.render(scene, camera);
  }

  useEffect(() => {
    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    flatShape = new THREE.Shape([
      new THREE.Vector2(-1.0, -1.0),
      new THREE.Vector2(1.0, -1.0),
      new THREE.Vector2(1.0, 1.0),
      new THREE.Vector2(-1.0, 1.0),
    ]);

    geometry = new THREE.ShapeGeometry(flatShape);

    cube = new THREE.Mesh(geometry, material);

    clock.start();

    const rend = new THREE.WebGLRenderer({
      canvas: canvasRef.current ? canvasRef.current : null,
      preserveDrawingBuffer: true,
    });

    rend.setSize(dimension, dimension);

    setScene(sc);
    setCamera(cam);
    renderer = rend;
  }, [canvasRef, dimension]);

  useEffect(() => {
    if (scene && renderer && camera) {
      scene.add(cube);
      // scene.background = new THREE.Color("#334155");

      camera.position.z = 1;

      if (!updated) update();
    }
  }, [scene, renderer, camera]);

  return (
    <>
      <div>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600 }}
          id="c"
        ></canvas>
      </div>
    </>
  );
}
