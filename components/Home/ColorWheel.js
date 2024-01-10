import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

let renderer;
let clock;

export default function ColorWheel() {
  const [scene, setScene] = useState(undefined);
  const [camera, setCamera] = useState(undefined);
  const [updated, setUpdated] = useState(false);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector2(300.0, 300.0) },
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
				
      if(horBeam.r < 0.35 && horBeam.g < 0.35 && horBeam.b < 0.35){
        discard;
      }

      gl_FragColor = vec4((( horBeam) * horColour), 1.0);
			}
`,
  });

  const flatShape = new THREE.Shape([
    new THREE.Vector2(-1.0, -1.0),
    new THREE.Vector2(1.0, -1.0),
    new THREE.Vector2(1.0, 1.0),
    new THREE.Vector2(-1.0, 1.0),
  ]);

  const geometry = new THREE.ShapeGeometry(flatShape);

  const cube = new THREE.Mesh(geometry, material);

  const canvasRef = useRef(null);

  function update() {
    setUpdated(true);
    requestAnimationFrame(update);

    cube.material.uniforms.iTime.value = clock.getElapsedTime();

    renderer.render(scene, camera);
  }

  useEffect(() => {
    clock = new THREE.Clock();
    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    clock.start();

    const rend = new THREE.WebGLRenderer({
      canvas: canvasRef.current ? canvasRef.current : null,
      preserveDrawingBuffer: true,
    });

    rend.setSize(300, 300);

    setScene(sc);
    setCamera(cam);
    renderer = rend;
  }, [canvasRef]);

  useEffect(() => {
    if (scene && renderer && camera) {
      scene.add(cube);
      scene.background = new THREE.Color("#334155");

      camera.position.z = 1;

      if (!updated) update();
    }
  }, [scene, renderer, camera]);

  return (
    <>
      <div>
        <canvas
          ref={canvasRef}
          id="c"
          style={{ width: "300px", height: "300px" }}
        ></canvas>
      </div>
    </>
  );
}
