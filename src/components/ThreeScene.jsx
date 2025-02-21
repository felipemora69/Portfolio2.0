import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const AnimatedSphere = ({mousePos}) => {
  return (
    <mesh
      position={[mousePos.x, mousePos.y, 0]}
      rotation={[0, 0, 0]}
      scale={[2, 2, 2]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#2C8780" wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update mouse position when the mouse moves
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Map mouse position to 3D space
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the mouse position state
      setMousePos({ x, y });
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      <OrbitControls 
        enableZoom={true}
        autoRotate
        autoRotateSpeed={1}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere mousePos={mousePos} />
    </Canvas>
  );
};

export default ThreeScene;