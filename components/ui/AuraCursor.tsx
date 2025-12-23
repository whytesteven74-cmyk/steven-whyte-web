"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const AuraCursor = () => {
    const [isHovering, setIsHovering] = useState<"default" | "pointer" | "text">("default");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring configuration for the "ex-FAANG" feel
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Determine cursor state based on element being hovered
            const target = e.target as HTMLElement;
            if (target.closest("button, a, .cursor-pointer")) {
                setIsHovering("pointer");
            } else if (target.closest("h1, h2, h3, p")) {
                setIsHovering("text");
            } else {
                setIsHovering("default");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Main Aura Dot */}
            <motion.div
                className="absolute w-4 h-4 rounded-full bg-emerald-600 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Glow / Ring */}
            <motion.div
                className="absolute rounded-full border border-emerald-500/30"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering === "pointer" ? 80 : isHovering === "text" ? 120 : 40,
                    height: isHovering === "pointer" ? 80 : isHovering === "text" ? 120 : 40,
                    backgroundColor: isHovering === "pointer" ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)",
                    backdropFilter: isHovering === "text" ? "blur(2px)" : "blur(0px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
        </div>
    );
};
