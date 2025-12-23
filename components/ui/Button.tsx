"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "gradient" | "outline";
    size?: "sm" | "md" | "lg" | "xl";
    rounded?: "sm" | "md" | "lg" | "full";
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    gradient: "bg-gradient-to-r from-emerald-500 to-sky-500 text-white hover:from-emerald-600 hover:to-sky-600 shadow-lg shadow-emerald-500/30",
    outline: "bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
};

const roundedStyles: Record<NonNullable<ButtonProps["rounded"]>, string> = {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    full: "rounded-full",
};

// ============================================
// BUTTON COMPONENT
// ============================================

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            variant = "primary",
            size = "md",
            rounded = "full",
            loading = false,
            icon,
            iconPosition = "right",
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <motion.div
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                className="inline-block"
            >
                <button
                    ref={ref}
                    className={cn(
                        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                        variantStyles[variant],
                        sizeStyles[size],
                        roundedStyles[rounded],
                        className
                    )}
                    disabled={disabled || loading}
                    {...props}
                >
                    {loading && (
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    )}
                    {icon && iconPosition === "left" && !loading && icon}
                    {children}
                    {icon && iconPosition === "right" && !loading && icon}
                </button>
            </motion.div>
        );
    }
);

Button.displayName = "Button";

// ============================================
// ICON BUTTON
// ============================================

export interface IconButtonProps extends Omit<ButtonProps, "icon" | "iconPosition"> {
    icon: React.ReactNode;
    "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, className, size = "md", ...props }, ref) => {
        const iconSizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
            sm: "w-8 h-8",
            md: "w-10 h-10",
            lg: "w-12 h-12",
            xl: "w-14 h-14",
        };

        return (
            <Button
                ref={ref}
                size={size}
                className={cn("!p-0", iconSizeStyles[size], className)}
                {...props}
            >
                {icon}
            </Button>
        );
    }
);
IconButton.displayName = "IconButton";

// ============================================
// LINK BUTTON
// ============================================

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    external?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className, external = false }) => (
    <a
        href={href}
        className={cn(
            "inline-flex items-center gap-1 text-emerald-600 font-medium hover:text-emerald-700 transition-colors group",
            className
        )}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
    >
        {children}
        <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    </a>
);
