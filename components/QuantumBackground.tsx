import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const QuantumBackground: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current?.material instanceof THREE.ShaderMaterial) {
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} scale={100}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color("#1e3a8a") },
          uColorB: { value: new THREE.Color("#3b82f6") },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float wave = sin(dist * 10.0 - uTime) * 0.5 + 0.5;
            vec3 color = mix(uColorA, uColorB, wave);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
};

export default QuantumBackground;
