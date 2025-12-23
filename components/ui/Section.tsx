"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "dark" | "gradient" | "subtle";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    container?: boolean;
}

export interface SectionHeaderProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
    default: "bg-white",
    dark: "bg-gray-950 text-white",
    gradient: "bg-gradient-to-br from-emerald-50 via-white to-sky-50",
    subtle: "bg-gray-50/50",
};

const sizeStyles: Record<NonNullable<SectionProps["size"]>, string> = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
    xl: "py-32 md:py-40",
    full: "min-h-screen py-24",
};

// ============================================
// SECTION COMPONENT
// ============================================

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    variant = "default",
    size = "md",
    container = true,
}) => (
    <section id={id} className={cn(variantStyles[variant], sizeStyles[size], className)}>
        {container ? <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div> : children}
    </section>
);

// ============================================
// SECTION HEADER
// ============================================

const alignStyles: Record<NonNullable<SectionHeaderProps["align"]>, string> = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    subtitle,
    align = "center",
    className,
}) => (
    <motion.div
        className={cn("max-w-3xl mb-12 md:mb-16", alignStyles[align], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
        {label && (
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">
                <span className="w-8 h-px bg-emerald-500" />
                {label}
                <span className="w-8 h-px bg-emerald-500" />
            </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {title}
        </h2>
        {subtitle && (
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                {subtitle}
            </p>
        )}
    </motion.div>
);

// ============================================
// GRID LAYOUTS
// ============================================

interface GridProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
    className?: string;
}

const colStyles: Record<NonNullable<GridProps["cols"]>, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapStyles: Record<NonNullable<GridProps["gap"]>, string> = {
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
};

export const Grid: React.FC<GridProps> = ({ children, cols = 3, gap = "md", className }) => (
    <div className={cn("grid", colStyles[cols], gapStyles[gap], className)}>{children}</div>
);

// ============================================
// HERO SECTION
// ============================================

interface HeroProps {
    label?: string;
    title: React.ReactNode;
    subtitle?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Hero: React.FC<HeroProps> = ({ label, title, subtitle, children, className }) => (
    <Section variant="gradient" size="full" className={cn("relative overflow-hidden", className)}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-sky-500/10 to-transparent blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content */}
        <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh]"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
        >
            {label && (
                <motion.span
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 mb-6 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {label}
                </motion.span>
            )}

            <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 mb-8 max-w-5xl leading-[1.1]"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
            >
                {title}
            </motion.h1>

            {subtitle && (
                <motion.p
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    {subtitle}
                </motion.p>
            )}

            {children && (
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    </Section>
);
