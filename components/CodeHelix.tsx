import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

const CodeHelix: React.FC = () => {
  const mesh = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const codeSnippets = [
    "const quantum = new QuantumCircuit();",
    "quantum.hadamard(0);",
    "quantum.cnot(0, 1);",
    "const result = quantum.measure();",
    'if (result) console.log("Entangled!");',
  ];

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={mesh}>
      {[...Array(20)].map((_, i) => {
        const theta = (i / 20) * Math.PI * 2;
        const y = (i / 20) * 20 - 10;
        const x = Math.cos(theta) * 10;
        const z = Math.sin(theta) * 10;

        return (
          <group key={i} position={[x, y, z]}>
            <Html
              transform
              occlude
              style={{
                transition: "all 0.2s",
                opacity: hovered === i ? 1 : 0.3,
                transform: `scale(${hovered === i ? 1.2 : 1})`,
              }}
            >
              <div className="bg-blue-900 bg-opacity-80 p-2 rounded text-cyan-300 text-xs w-40">
                {codeSnippets[i % codeSnippets.length]}
              </div>
            </Html>
            <mesh
              onPointerOver={() => setHovered(i)}
              onPointerOut={() => setHovered(null)}
            >
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

export default CodeHelix;
