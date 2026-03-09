import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';

const SphereGroup = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Outer Glow Sphere */}
            <Sphere args={[1, 64, 64]}>
                <MeshDistortMaterial
                    color="#00f2fe"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    emissive="#00f2fe"
                    emissiveIntensity={0.5}
                />
            </Sphere>

            {/* Inner Wireframe Sphere */}
            <Sphere args={[1.2, 32, 32]}>
                <meshStandardMaterial
                    color="#4facfe"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </group>
    );
};

const TechSphere = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <SphereGroup />
                </Float>
            </Canvas>
        </div>
    );
};

export default TechSphere;
