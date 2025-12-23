"use client";

import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const MagneticButton = ({
    children,
    className = "",
    onClick
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void
}) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Apply magnetic pull (divide by factor to dampen)
        x.set(distanceX / 2);
        y.set(distanceY / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};
