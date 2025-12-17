
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
                    <ambientLight intensity={0.1} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#eecfa1" />

                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Constellation count={80} />
                    </Float>

                    <fog attach="fog" args={['#121212', 10, 30]} />
                    <Environment preset="night" />

                    <EffectComposer>
                        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.2} radius={0.4} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
