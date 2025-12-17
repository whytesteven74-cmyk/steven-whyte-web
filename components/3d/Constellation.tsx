
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line, Sphere } from "@react-three/drei";

export function Constellation({ count = 100 }) {
    const group = useRef<THREE.Group>(null!);

    // Generate random points
    const points = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <group ref={group}>
            {/* Nodes */}
            {points.map((point, i) => (
                <Sphere key={i} position={point} args={[0.08, 16, 16]}>
                    <meshStandardMaterial color="#eecfa1" emissive="#eecfa1" emissiveIntensity={2} />
                </Sphere>
            ))}

            {/* Connections (Static strictly for performance, or dynamic if optimized) 
            For this demo, we use a simple wireframe approach or specific lines 
            to avoid O(n^2) loop in JS every frame.
        */}
            <Line
                points={points} // Connects all points in sequence - gives a "constellation" path look
                color="#b38b6d"
                opacity={0.3}
                transparent
                lineWidth={1}
            />

            {/* Add extra random connections for 'network' feel */}
            <Line
                points={[...points].sort(() => Math.random() - 0.5)}
                color="#b38b6d"
                opacity={0.1}
                transparent
                lineWidth={0.5}
            />
        </group>
    );
}
