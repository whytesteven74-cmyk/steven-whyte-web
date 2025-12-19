import { cn } from "@/lib/utils";
import { Magnetic } from "./Interactions";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <Magnetic distance={0.1}>
            <div
                className={cn(
                    "row-span-1 rounded-3xl group/bento transition duration-500 p-8 bg-glass-black border border-white/5 flex flex-col space-y-4 hover:border-white/20 hover:bg-black/40 backdrop-blur-xl relative overflow-hidden h-full shadow-2xl",
                    className
                )}
            >
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-sage/20 to-transparent opacity-0 group-hover/bento:opacity-100 transition duration-500 rounded-3xl" />

                <div className="relative z-10 flex flex-col h-full">
                    {header}
                    <div className="mt-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-clay/5 text-clay">
                                {icon}
                            </div>
                            <div className="font-sans font-bold text-white text-xl tracking-tight">
                                {title}
                            </div>
                        </div>
                        <div className="font-sans font-normal text-slate-accent text-sm leading-relaxed antialiased">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </Magnetic>
    );
};
