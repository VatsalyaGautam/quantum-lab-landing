import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface User {
  lat: number;
  lon: number;
}

const ActiveUsersGlobe: React.FC = () => {
  const mesh = useRef<THREE.Group>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const generateRandomUsers = () => {
      return Array.from({ length: 50 }, () => ({
        lat: Math.random() * 180 - 90,
        lon: Math.random() * 360 - 180,
      }));
    };

    setUsers(generateRandomUsers());
    const interval = setInterval(() => {
      setUsers(generateRandomUsers());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={mesh}>
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial color="#1e3a8a" transparent opacity={0.7} />
      </Sphere>
      {users.map((user, index) => {
        const phi = (90 - user.lat) * (Math.PI / 180);
        const theta = (user.lon + 180) * (Math.PI / 180);
        const x = -2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.cos(phi);
        const z = 2 * Math.sin(phi) * Math.sin(theta);

        return (
          <mesh key={index} position={[x, y, z]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial
              color="cyan"
              emissive="cyan"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default ActiveUsersGlobe;
