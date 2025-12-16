
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
}

export const Card = ({ className, children, ...props }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "relative group bg-glass-white backdrop-blur-sm border border-white/10 p-6 rounded-xl overflow-hidden transition-colors hover:border-desert-sand/50",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}
