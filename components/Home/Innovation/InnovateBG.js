import React, { useContext, useEffect, useRef, useState } from "react";
import { Theme } from "../../../utils/Theme";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";

var gl, program, positionBuffer, startTime, color, mountColor;
var positionAttributeLocation;

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function setVertexData(gl, program) {
  gl.useProgram(program);
  positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}

function draw() {
  requestAnimationFrame(draw);

  var resolutionUniformLocation = gl.getUniformLocation(program, "iResolution");
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

  var timeUniform = gl.getUniformLocation(program, "iTime");
  var now = new Date();
  var time = (now - startTime) / 1000;
  gl.uniform1f(timeUniform, time);

  var bgUniform = gl.getUniformLocation(program, "iBG");
  gl.uniform3f(bgUniform, color[0], color[1], color[2]);

  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  gl.enableVertexAttribArray(positionAttributeLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var size = 2;
  var type = gl.FLOAT;
  var normalize = false;
  var stride = 0;
  var offset = 0;
  gl.vertexAttribPointer(
    positionAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // draw
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 6;
  gl.drawArrays(primitiveType, offset, count);
}

export default function InnovateBG() {
  const { state, dispatch } = useContext(Theme);
  const [dimension, setDimension] = useState(300);
  var canvasRef = useRef(null);

  var canvas;

  const fullConfig = resolveConfig(tailwindConfig);

  const resize = () => {
    setDimension(window?.innerWidth);
  };

  useEffect(() => {
    startTime = new Date();

    setDimension(window?.innerWidth);

    window?.addEventListener("resize", resize);
  }, []);

  useEffect(() => {
    color = [];
    mountColor = [];

    if (state.darkMode.dark) {
      color[0] = 15 / 256;
      color[1] = 23 / 256;
      color[2] = 42 / 256;

      mountColor[0] = 8 / 256;
      mountColor[1] = 145 / 256;
      mountColor[2] = 178 / 256;
    } else {
      color[0] = 1.0;
      color[1] = 1.0;
      color[2] = 1.0;

      mountColor[0] = 8 / 256;
      mountColor[1] = 145 / 256;
      mountColor[2] = 178 / 256;
    }

    canvas = canvasRef.current;
    if (!canvas) return;

    if (gl) {
      let bgUniform = gl.getUniformLocation(program, "iBG");
      gl.uniform3f(bgUniform, color[0], color[1], color[2]);

      let mountUniform = gl.getUniformLocation(program, "iMount");
      gl.uniform3f(mountUniform, mountColor[0], mountColor[1], mountColor[2]);
    }
  }, [state, canvasRef]);

  useEffect(() => {
    canvas = canvasRef.current;
    if (!canvas) return;

    gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }

    // Get the strings for our GLSL shaders
    var vertexShaderSource = `
    precision highp float;
    attribute vec2 a_position;
    
    void main()
    {
        vec4 pos=vec4(a_position,0.,1.);
        gl_Position=pos;
        
    }`;

    var fragmentShaderSource = `

    precision highp float;
    #define M_PI 3.14159265359

    uniform vec2 iResolution;
    uniform vec3 iBG;
    uniform vec3 iMount;
    uniform float iTime;

    #define float2 vec2
    #define float3 vec3
    #define float4 vec4

    #define saturate(x) clamp(x, 0.0, 1.0)
    #define pack(x) (x*0.5+0.5)
    #define unpack(x) (x*2.0 - 1.0)
    #define lerp(a,b,x) mix(a,b,x)
    #define rgb(r, g, b) (vec3(r, g, b)*0.0039215686)

    // Directions
    const ivec2 center = ivec2(0, 0);
    const ivec2 up = ivec2(0, 1);
    const ivec2 down = ivec2(0, -1);
    const ivec2 right = ivec2(1, 0);
    const ivec2 left = ivec2(-1, 0);
    const ivec2 upRight = up + right;
    const ivec2 upLeft = up + left;
    const ivec2 downRight = down + right;
    const ivec2 downLeft = down + left;

    const vec2 centerf = vec2(0, 0);
    const vec2 upf = vec2(0, 1);
    const vec2 downf = vec2(0, -1);
    const vec2 rightf = vec2(1, 0);
    const vec2 leftf = vec2(-1, 0);
    const vec2 upRightf = normalize(upf + rightf);
    const vec2 upLeftf = normalize(upf + leftf);
    const vec2 downRightf = normalize(downf + rightf);
    const vec2 downLeftf = normalize(downf + leftf);

    float smootherstep(float a, float b, float x)
    {
        x = saturate((x - a) / (b - a));
        return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
    }

    float segment(float value, float segments)
    {
        return float(int(value*segments))/segments;
    }

    vec3 sdgCircle( in vec2 p, in float r )
    { float d = length(p); return vec3( d-r, p/d ); }

    float sdCircle( vec2 p, float r )
    { return length(p) - r; }

    float sdRoundedBox( in vec2 p, in vec2 b, in vec4 r )
    {
        r.xy = (p.x>0.0)?r.xy : r.zw;
        r.x  = (p.y>0.0)?r.x  : r.y;
        vec2 q = abs(p)-b+r.x;
        return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
    }

    float pcurve(float x, float a, float b)
    {
        float k = pow(a+b,a+b)/(pow(a,a)*pow(b,b));
        return k*pow(x,a)*pow(1.0-x,b);
    }

    float rand2(vec2 p) {
        return fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    vec2 hash21(float p)
    {
        vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.xx+p3.yz)*p3.zy);
    }

    vec2 hash2(vec2 p)
    {
        return fract(sin(vec2(
            dot(p, vec2(127.1, 311.7)),
            dot(p, vec2(269.5, 183.3))
        ))*43758.5453);
    }



    vec4 glslmod(vec4 x, vec4 y) { return x - y * floor(x / y); }
    vec3 glslmod(vec3 x, vec3 y) { return x - y * floor(x / y); }
    vec2 glslmod(vec2 x, vec2 y) { return x - y * floor(x / y); }
    vec3 permute_optimizedSnoise2D(in vec3 x) { return glslmod(x*x*34.0 + x, vec3(289.0)); }
    float optimizedSnoise(in vec2 v) {
        vec2 i = floor((v.x + v.y)*.36602540378443 + v);
        vec2 x0 = (i.x + i.y)*.211324865405187 + v - i;
        float s = step(x0.x, x0.y);
        vec2 j = vec2(1.0 - s, s);
        vec2 x1 = x0 - j + .211324865405187;
        vec2 x3 = x0 - .577350269189626;
        i = glslmod(i, vec2(289.));
        vec3 p = permute_optimizedSnoise2D(permute_optimizedSnoise2D(i.y + vec3(0, j.y, 1)) + i.x + vec3(0, j.x, 1));
        vec3 m = max(.5 - vec3(dot(x0, x0), dot(x1, x1), dot(x3, x3)), 0.);
        vec3 x = fract(p * .024390243902439) * 2. - 1.;
        vec3 h = abs(x) - .5;
        vec3 a0 = x - floor(x + .5);
        return .5 + 65. * dot(pow(m, vec3(4.0))*(-0.85373472095314*(a0*a0 + h * h) + 1.79284291400159), a0 * vec3(x0.x, x1.x, x3.x) + h * vec3(x0.y, x1.y, x3.y));
    }




        float getH(
            float pos,
            out vec2 from, out vec2 to, out float blend
        )
    {
        float n;
    
        float i = floor(pos);
        float f = pos - i;
        vec2 rand = vec2(0.4, 0.95);
    
        // x is i-offset, y is peak height.
        vec2 sub = vec2(0.5, 0.0);
        vec2 add = vec2(0.5, 1.1 - rand.y);
        vec2 l = (hash21((i-1.0)) - sub) * rand + add;
        vec2 c = (hash21(i) - sub) * rand + add;
        vec2 r = (hash21((i+1.0)) - sub) * rand + add;
    
        l.x = (i - 1.0) + l.x;
        c.x = i + c.x;
        r.x = (i + 1.0) + r.x;
    
        if(pos < c.x)
        {
            from = l;
            to = c;
        }
        else
        {
            from = c;
            to = r;
        }
    
        // Make 90-degree angle mountains
        // between from-to points by creating mid point.
        //if(false)
        {
            float tl = 0.5*(to.x - from.x - to.y + from.y);
            vec2 mid = to + vec2(-1.0, 1.0)*tl;
    
            if(pos < mid.x)
            {
                to = mid;
            }
            else
            {
                from = mid;
            }
        }
    
        // Linearly interpolate between from-to points.
        blend = ((pos - from.x) / (to.x - from.x));
        n = lerp(from.y, to.y, blend);
    
        return n;
    }
    
    
    
    void main()
    {
        //gl_FragCoord.y -= -0.1*iResolution.y + 0.1*iResolution.y*cos((gl_FragCoord.x / iResolution.x - 0.5)*M_PI*0.5);
    
    
        float mx = max(iResolution.x, iResolution.y);
        vec2 uv = gl_FragCoord.xy / mx;
        vec2 nuv = gl_FragCoord.xy / iResolution.xy;
        vec2 pos = uv - (iResolution.xy)*0.5/mx;
        
        float col = 1.0;
    
        float sNoise = optimizedSnoise(vec2(pos.x*15.0, 0.0));
    
        // Deform.
        pos -= 0.5*vec2(pos.y, - pos.x);
    
        // Horizontal scroll.
        pos.x += iTime*0.01;
    
    
        float scaleX = 5.0;
        vec2 from, to; float blend;
        float noise = getH(
            scaleX*pos.x, // In
            from, to, blend // Out
        );
        
        
        
        // Additional wiggle to the lines.
        noise -= 0.05*sNoise;
    
        float posY = 0.3;
        float scaleY = 1.0 / scaleX; //0.05;
    
        float scaledNoise = scaleY*noise;
        float mountHeight = posY + scaledNoise;
        
    
        // Hatching inside mountains.
        float mountGrad = saturate(scaledNoise - nuv.y + posY) / scaledNoise;
        if(
            //false &&
            (nuv.y < mountHeight - 0.0025) && (nuv.y > posY)
        )
        {
            col = ((
                + lerp(0.5, 3.0, mountGrad)*abs(cos((1.0-pow(0.025*sNoise + mountGrad, 0.5))*(lerp(1.0, noise, 0.8))*M_PI*25.0))
                + saturate(3.0 + 10.0*cos(pos.x * 32.0 - cos(pow(mountGrad, 1.25)*13.0)))
                - saturate(3.0 + 10.0*cos(2.0 + pos.x * 32.0 - cos(pow(mountGrad, 1.25)*13.0)))
            ));
        }
    
        
        // Horizon.
        float belowHorizon = saturate(1.0 - (posY - nuv.y) / posY + 0.01*sNoise);
        float aboveHorizonMask = saturate(iResolution.y*(belowHorizon - 1.0 + 1.0/iResolution.y));
        col = min(col, max(aboveHorizonMask, saturate(max(
            saturate(1.1 - belowHorizon*belowHorizon),
            saturate(abs(cos(0.2*belowHorizon*belowHorizon*M_PI*450.0*posY)))
            + saturate(0.5 + cos(pos.x * 27.0 + cos(belowHorizon*belowHorizon*belowHorizon*13.0)))
            - saturate(-0.5 + cos(pos.x * 32.0 + cos(belowHorizon*belowHorizon*belowHorizon*13.0)))
        ))));
        
        
        // Clouds.
        //if(false)
        {
            float clouds = saturate(
                2.0*abs(optimizedSnoise(nuv * vec2(2.0, 4.0) + vec2(0.05*iTime, 0.0)) - 0.5)
                + 1.0*optimizedSnoise(nuv * vec2(5.0, 16.0) + vec2(0.2*iTime, 0.0))
            );
            col = max(col, saturate((nuv.y + 0.25)*clouds*clouds - 1.0 + clouds));
        }
        
        // Colorize.
        gl_FragColor.a = 1.0;

        
        gl_FragColor.rgb = lerp(
            iBG,
            vec3(0.03125, 0.56640625, 0.6953125),
            // iMount,
            1.0-col
        );
    }


  `;

    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    program = createProgram(gl, vertexShader, fragmentShader);

    setVertexData(gl, program);

    gl.canvas.width = gl.canvas.clientWidth;
    gl.canvas.height = gl.canvas.clientHeight;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    draw();
  }, [canvasRef]);

  return (
    <>
      <div>
        <canvas
          ref={canvasRef}
          style={{ width: dimension, height: "300px" }}
          id="c"
        ></canvas>
      </div>
    </>
  );
}
