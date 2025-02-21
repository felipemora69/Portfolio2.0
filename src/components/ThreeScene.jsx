import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const AnimatedShape = ({ morphTime = 3 }) => {
  const [progress, setProgress] = useState(0);
  const meshRef = useRef();
  const shapeIndex = useRef(0);
  const direction = useRef([Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1]);
  const speed = 0.05;

  // Shapes Indez
  const shapes = [
    <sphereGeometry args={[1, 30, 30]} />,
    <boxGeometry args={[1.5, 1.5, 1.5]} />,
    <coneGeometry args={[1, 2, 28]} />
  ];

  // Animation loop to transition shapes and move the object
  useFrame(() => {
    // Increment progress for shape morphing
    setProgress((prev) => Math.min(prev + (1 / morphTime) * 0.03, 1)); // Slower transition speed

    // Switch to the next shape
    if (progress >= 1) {
      shapeIndex.current = (shapeIndex.current + 1) % shapes.length;
      setProgress(0);
    }

    // Move the object around the scene
    if (meshRef.current) {
      // Apply random movement
      meshRef.current.position.x += direction.current[0] * speed;
      meshRef.current.position.y += direction.current[1] * speed;
      meshRef.current.position.z += direction.current[2] * speed;

      // Make the object "bounce"
      if (meshRef.current.position.x > 5 || meshRef.current.position.x < -5) direction.current[0] *= -1;
      if (meshRef.current.position.y > 3 || meshRef.current.position.y < -3) direction.current[1] *= -1;
      if (meshRef.current.position.z > 5 || meshRef.current.position.z < -5) direction.current[2] *= -1;
    }
  });

  // Interpolating geometry between shapes based on progress
  const geometry = shapes[shapeIndex.current];

  return (
    <mesh position={[0, 0, -5]} scale={[2, 2, 2]} ref={meshRef}>
      {geometry}
      <meshStandardMaterial color="#2C8780" wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
    style={{
      pointerEvents: 'none',
    }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedShape morphTime={4} />
    </Canvas>
  );
};

export default ThreeScene;






// import React, { useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// const AnimatedSphere = ({mousePos}) => {
//   return (
//     <mesh
//       position={[mousePos.x, mousePos.y, 0]}
//       rotation={[0, 0, 0]}
//       scale={[2, 2, 2]}
//     >
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color="#2C8780" wireframe />
//     </mesh>
//   );
// };

// const ThreeScene = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Update mouse position when the mouse moves
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       // Map mouse position to 3D space
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;

//       // Update the mouse position state
//       setMousePos({ x, y });
//     };

//     // Add mousemove event listener
//     window.addEventListener('mousemove', handleMouseMove);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <Canvas>
//       <PerspectiveCamera makeDefault position={[0, 0, 7]} />
//       <OrbitControls 
//         enableZoom={true}
//         autoRotate
//         autoRotateSpeed={1}
//       />
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <AnimatedSphere mousePos={mousePos} />
//     </Canvas>
//   );
// };

// export default ThreeScene;