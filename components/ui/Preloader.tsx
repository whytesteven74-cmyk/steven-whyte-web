"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { identity } from "@/data/identity";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Orchestrate a premium 2-second entrance
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
                    exit={{
                        clipPath: "inset(0 0 100% 0)",
                        transition: { duration: 1, ease: [0.8, 0, 0.1, 1] }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <Heart className="w-16 h-16 text-emerald-950 fill-emerald-950/10" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 font-serif text-emerald-900 tracking-widest uppercase text-[10px]"
                    >
                        {identity.journey.theme}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
