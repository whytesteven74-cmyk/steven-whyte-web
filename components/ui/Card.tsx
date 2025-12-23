"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "gradient" | "bordered" | "elevated";
    hover?: "lift" | "glow" | "scale" | "none";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    animate?: boolean;
}

export interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
    default: "bg-white border border-gray-200/60 shadow-sm",
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 border border-white/20 backdrop-blur-sm",
    bordered: "bg-transparent border-2 border-emerald-500/30",
    elevated: "bg-white shadow-2xl shadow-emerald-500/10 border border-gray-100",
};

const hoverStyles: Record<NonNullable<CardProps["hover"]>, string> = {
    lift: "hover:-translate-y-2 hover:shadow-xl transition-all duration-300",
    glow: "hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300",
    scale: "hover:scale-[1.02] transition-transform duration-300",
    none: "",
};

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
};

const roundedStyles: Record<NonNullable<CardProps["rounded"]>, string> = {
    none: "rounded-none",
    sm: "rounded-lg",
    md: "rounded-2xl",
    lg: "rounded-3xl",
    full: "rounded-[2rem]",
};

// ============================================
// CARD COMPONENTS
// ============================================

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            className,
            variant = "default",
            hover = "lift",
            padding = "md",
            rounded = "lg",
            animate = true,
        },
        ref
    ) => {
        const Wrapper = animate ? motion.div : "div";
        const animationProps = animate
            ? {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }
            : {};

        return (
            <Wrapper
                ref={ref}
                className={cn(
                    "relative overflow-hidden",
                    variantStyles[variant],
                    hoverStyles[hover],
                    paddingStyles[padding],
                    roundedStyles[rounded],
                    className
                )}
                {...animationProps}
            >
                {children}
            </Wrapper>
        );
    }
);
Card.displayName = "Card";

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
    <div className={cn("mb-4", className)}>{children}</div>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
    <div className={cn("", className)}>{children}</div>
);

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
    <div className={cn("mt-6 pt-4 border-t border-gray-200/50", className)}>{children}</div>
);

// ============================================
// SPECIALIZED CARD VARIANTS
// ============================================

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => (
    <Card variant="elevated" hover="lift" className={cn("group", className)}>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
            <span className="text-white">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
);

interface StatCardProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
    className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon, className }) => (
    <Card variant="glass" hover="glow" className={cn("text-center", className)}>
        {icon && <div className="text-emerald-400 mb-3">{icon}</div>}
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-2">
            {value}
        </div>
        <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">{label}</div>
    </Card>
);

interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatar, className }) => (
    <Card variant="gradient" hover="lift" className={cn("", className)}>
        <svg className="w-10 h-10 text-emerald-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">"{quote}"</p>
        <div className="flex items-center gap-4">
            {avatar ? (
                <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
            ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500" />
            )}
            <div>
                <div className="font-semibold text-gray-900">{author}</div>
                {role && <div className="text-sm text-gray-500">{role}</div>}
            </div>
        </div>
    </Card>
);

interface StoryCardProps {
    title: string;
    location: string;
    date: string;
    image?: string;
    gradient?: string;
    className?: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
    title,
    location,
    date,
    image,
    gradient = "from-emerald-500 to-sky-500",
    className,
}) => (
    <motion.div
        className={cn("group cursor-pointer", className)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className={cn("relative h-80 rounded-3xl overflow-hidden mb-4", !image && `bg-gradient-to-br ${gradient}`)}>
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                {date}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white/80 text-sm mb-1">{location}</div>
                <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
        </div>
    </motion.div>
);
