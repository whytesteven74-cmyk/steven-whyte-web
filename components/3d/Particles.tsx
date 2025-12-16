
"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function Particles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null!);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 100; // Spread wide
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [count]);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        // Rotate the entire cloud slowly
        mesh.current.rotation.y += 0.0005;
        mesh.current.rotation.x += 0.0002;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={geometry.attributes.position.count}
                    array={geometry.attributes.position.array}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                size={0.15}
                sizeAttenuation={true}
                color="#eecfa1"
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
