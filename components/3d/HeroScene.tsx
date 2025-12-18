
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Constellation } from "./Constellation";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-80">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#e8f3ee" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fdf2f2" />

                    <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.1}>
                        <Constellation count={40} />
                    </Float>

                    <fog attach="fog" args={['#faf7f2', 5, 25]} />
                    <Environment preset="apartment" />

                    <EffectComposer>
                        <Bloom luminanceThreshold={0.8} mipmapBlur intensity={0.5} radius={0.4} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
