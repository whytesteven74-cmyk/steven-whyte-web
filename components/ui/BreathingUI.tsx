
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BreathingUI = () => {
    const [phase, setPhase] = useState<"Inhale" | "Exhale">("Inhale");

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
        }, 4000); // 4s inhale, 4s exhale
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Background Glow */}
                <motion.div
                    animate={{
                        scale: phase === "Inhale" ? 1.2 : 0.8,
                        opacity: phase === "Inhale" ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-clay/20 rounded-full blur-3xl"
                />

                {/* Breathing Circle */}
                <motion.div
                    animate={{
                        scale: phase === "Inhale" ? 1.1 : 0.7,
                        borderWidth: phase === "Inhale" ? "1px" : "4px",
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full border border-clay/20 flex items-center justify-center relative z-10"
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={phase}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 1 }}
                            className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay font-bold"
                        >
                            {phase}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-clay/5 animate-[spin_20s_linear_infinite]" />
            </div>

            <p className="text-[10px] font-mono text-slate-accent uppercase tracking-widest text-center max-w-[200px] leading-relaxed">
                Sync your breath. <br /> Find the space between thoughts.
            </p>
        </div>
    );
};
