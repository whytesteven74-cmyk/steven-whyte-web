"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the heavy 3D component with SSR disabled
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-[1] pointer-events-none opacity-80 flex items-center justify-center">
      {/* Simple loading state for the 3D scene area */}
      <div className="text-sm text-stone-400">Loading visual experience...</div>
    </div>
  ),
});

export default function DynamicHeroScene() {
  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}
