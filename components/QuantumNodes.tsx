import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text, Line } from "@react-three/drei";
import * as THREE from "three";

interface QuantumNodesProps {
  features: string[];
}

const QuantumNodes: React.FC<QuantumNodesProps> = ({ features }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {features.map((feature, index) => {
        const angle = (index / features.length) * Math.PI * 2;
        const radius = 5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={index} position={[x, 0, z]}>
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial color="cyan" />
            </Sphere>
            <Text
              position={[0, 0.5, 0]}
              fontSize={0.3}
              color="cyan"
              anchorX="center"
              anchorY="middle"
            >
              {feature}
            </Text>
            <Line
              points={[
                [0, 0, 0],
                [0, 0, 0],
              ]}
              color="cyan"
              lineWidth={1}
              dashed
            />
          </group>
        );
      })}
    </group>
  );
};

export default QuantumNodes;
