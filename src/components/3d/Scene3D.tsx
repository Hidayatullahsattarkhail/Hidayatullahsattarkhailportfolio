import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

// Neural Network Node
const NeuralNode = ({ 
  position, 
  color,
  scale = 1
}: { 
  position: [number, number, number]; 
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      meshRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.3 * scale, 0]} />
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// AI Brain/Cube representing ML models
const AIBrain = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        {/* Outer wireframe cube */}
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial color="#00d4aa" wireframe opacity={0.6} transparent />
        </mesh>
        {/* Inner glowing core */}
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <MeshDistortMaterial
            color="#00d4aa"
            distort={0.4}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#00d4aa"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
};

// Code Brackets representing programming
const CodeBracket = ({ 
  position, 
  rotation = [0, 0, 0],
  color = "#a855f7"
}: { 
  position: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <torusGeometry args={[0.4, 0.08, 8, 4, Math.PI]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Binary/Data Stream
const DataStream = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] -= 0.02;
        if (posArray[i * 3 + 1] < -7) {
          posArray[i * 3 + 1] = 7;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00d4aa"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Neural Network Connection Lines
const NeuralConnections = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const connections = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    const nodePositions = [
      [-3, 1.5, -2],
      [3, -1, -1],
      [-2, -2, 0],
      [2.5, 2, -3],
      [0, -2.5, -2],
      [-3.5, -0.5, -1],
      [3.5, 1, -2]
    ];
    
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.5) {
          lines.push({
            start: new THREE.Vector3(...nodePositions[i] as [number, number, number]),
            end: new THREE.Vector3(...nodePositions[j] as [number, number, number])
          });
        }
      }
    }
    return lines;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.15;
      });
    }
  });

  return (
    <group ref={linesRef}>
      {connections.map((conn, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([
                conn.start.x, conn.start.y, conn.start.z,
                conn.end.x, conn.end.y, conn.end.z
              ]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4aa" transparent opacity={0.3} />
        </line>
      ))}
    </group>
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
          
          {/* Data flowing in background */}
          <DataStream />
          
          {/* Neural network connections */}
          <NeuralConnections />
          
          {/* AI Brain - main focal element */}
          <AIBrain position={[0, 0, -3]} />
          
          {/* Neural Network Nodes */}
          <NeuralNode position={[-3, 1.5, -2]} color="#00d4aa" scale={1.2} />
          <NeuralNode position={[3, -1, -1]} color="#a855f7" scale={1} />
          <NeuralNode position={[-2, -2, 0]} color="#06b6d4" scale={0.8} />
          <NeuralNode position={[2.5, 2, -3]} color="#8b5cf6" scale={1.1} />
          <NeuralNode position={[0, -2.5, -2]} color="#00d4aa" scale={0.9} />
          <NeuralNode position={[-3.5, -0.5, -1]} color="#a855f7" scale={0.7} />
          <NeuralNode position={[3.5, 1, -2]} color="#06b6d4" scale={0.8} />
          
          {/* Code Brackets */}
          <CodeBracket position={[-4, 2, -1]} rotation={[0, 0, Math.PI / 2]} color="#a855f7" />
          <CodeBracket position={[4, -2, -1]} rotation={[0, Math.PI, -Math.PI / 2]} color="#06b6d4" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
