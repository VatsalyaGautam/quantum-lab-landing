import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleField from "./ParticleField";
// import CodeHelix from "./CodeHelix";
import QuantumNodes from "./QuantumNodes";
import ActiveUsersGlobe from "./ActiveUsersGlobe";
import QuantumBackground from "./QuantumBackground";
import React, { useRef } from "react";
interface Feature {
  // Add specific properties here, e.g.:
  id: string;
  name: string;
  // ... other properties
}
interface QuantumSceneProps {
  features: Feature[]; // Replace 'any[]' with a more specific type if possible
  mouse: { x: number; y: number };
}

const QuantumScene: React.FC<QuantumSceneProps> = ({ features, mouse }) => {
  const mouseRef = useRef<[number, number]>([mouse.x, mouse.y]);
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <QuantumBackground />
      <ParticleField count={1000} mouse={mouseRef} />
      {/* <CodeHelix /> */}
      <QuantumNodes features={features.map((feature) => feature.name)} />
      <ActiveUsersGlobe />
    </Canvas>
  );
};

export default QuantumScene;
