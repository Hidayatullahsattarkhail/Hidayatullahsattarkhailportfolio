import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  color, 
  shape = 'sphere',
  speed = 1,
  rotationSpeed = 0.5 
}: { 
  position: [number, number, number]; 
  color: string;
  shape?: 'sphere' | 'torus' | 'box' | 'icosahedron';
  speed?: number;
  rotationSpeed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * rotationSpeed;
      meshRef.current.rotation.y += 0.003 * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'torus':
        return <Torus args={[0.8, 0.3, 16, 32]} />;
      case 'box':
        return <Box args={[1, 1, 1]} />;
      case 'icosahedron':
        return <Icosahedron args={[0.8, 0]} />;
      default:
        return <Sphere args={[0.8, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {renderShape()}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d4aa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4aa" />
          <pointLight position={[10, -10, 5]} intensity={0.3} color="#a855f7" />
          
          <ParticleField />
          
          <FloatingShape position={[-3, 1.5, -2]} color="#00d4aa" shape="sphere" speed={0.8} />
          <FloatingShape position={[3.5, -1, -1]} color="#a855f7" shape="torus" speed={1.2} />
          <FloatingShape position={[-2, -2, 0]} color="#00b4d8" shape="icosahedron" speed={1} />
          <FloatingShape position={[2.5, 2, -3]} color="#06b6d4" shape="box" speed={0.6} rotationSpeed={0.8} />
          <FloatingShape position={[0, -3, -2]} color="#8b5cf6" shape="sphere" speed={0.9} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
