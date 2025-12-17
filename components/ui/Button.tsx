
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost" | "outline"
    size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {

        const variants = {
            primary: "bg-clay text-white hover:bg-clay/90 border border-transparent",
            secondary: "bg-white/40 backdrop-blur-md border border-clay/10 text-clay hover:bg-white/60",
            outline: "bg-transparent border border-clay/20 text-clay hover:border-clay/60",
            ghost: "bg-transparent text-slate-400 hover:text-slate-900"
        }

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg"
        }

        return (
            <motion.button
                ref={ref as any}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
