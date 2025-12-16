
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Particles } from "./Particles";

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <Particles count={3000} />
                    <fog attach="fog" args={['#121212', 5, 20]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
