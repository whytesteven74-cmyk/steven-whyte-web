
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const AFFIRMATIONS = [
    "Your silence does not serve you, but your peace does.",
    "The weight you carry is allowed to be put down for a moment.",
    "Healing is not a destination, it is the rhythm of your return.",
    "You are more than the battles you have survived.",
    "Breathe. You are exactly where you need to be to witness your change.",
];

export const AffirmationCard = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % AFFIRMATIONS.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-8 rounded-[2rem] border-white/60 shadow-soft max-w-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Sparkles className="w-8 h-8 text-clay" />
            </div>

            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-clay rounded-full animate-pulse" />
                Unspoken Truth
            </h4>

            <div className="min-h-[80px]">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif italic text-lg text-slate-accent leading-relaxed"
                    >
                        "{AFFIRMATIONS[index]}"
                    </motion.p>
                </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-light uppercase">Daily Awareness • {index + 1}/{AFFIRMATIONS.length}</span>
                <button
                    onClick={() => setIndex((prev) => (prev + 1) % AFFIRMATIONS.length)}
                    className="w-6 h-6 rounded-full border border-clay/10 flex items-center justify-center hover:bg-clay hover:border-clay hover:text-white transition-all text-clay"
                >
                    <span className="text-[12px] leading-none">→</span>
                </button>
            </div>
        </div>
    );
};
