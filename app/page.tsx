"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Footprints, Sunrise, ArrowRight, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialFeed } from "@/components/social/SocialFeed";
import { TiltCard } from "@/components/ui/TiltCard";
import DynamicHeroScene from "@/components/3d/DynamicHeroScene";

// Poetic "Whispers" Data
const whispers = [
    "Nature is waiting...",
    "The path is yours.",
    "Breathe.",
    "Healing is not linear.",
    "Connection returns us home.",
    "Hope is real."
];

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Premium Physics
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "40%"]);

    const scrollToContent = () => {
        const element = document.getElementById("story");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-stone-50 overflow-x-hidden">

            {/* ===== FLOATING WHISPERS LAYER ===== */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] select-none">
                {whispers.map((text, i) => (
                    <motion.div
                        key={i}
                        className="absolute font-serif text-6xl whitespace-nowrap"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: i % 2 === 0 ? "-5%" : "auto",
                            right: i % 2 !== 0 ? "-5%" : "auto",
                        }}
                        animate={{
                            x: i % 2 === 0 ? [0, 50, 0] : [0, -50, 0],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>

            {/* ===== CINEMATIC HERO ===== */}
            <div className="relative h-screen flex items-center justify-center bg-transparent overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 z-0 bg-white"
                >
                    {/* Dynamic 3D Scene for Performance Optimization */}
                    <DynamicHeroScene />
                    {/* Background Gradient - "The Northern Lights" feel */}
                    <div className="absolute inset-0 bg-hero-premium opacity-80" />
                    <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-100/40 blur-[100px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: "2s" }} />
                    <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-emerald-50/60 blur-[80px] mix-blend-overlay" />
                </motion.div>

                <motion.div
                    style={{ y: textY }}
                    className="relative z-10 text-center px-6 max-w-7xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-8"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-emerald-200 bg-white/50 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-emerald-800 shadow-sm">
                            Whispers From the Path
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.0] tracking-tight font-serif text-gradient-premium">
                            A Sanctuary <br />
                            <i className="font-serif font-light opacity-80">For The Soul.</i>
                        </h1>

                        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover the silence in movement. <br className="hidden md:block" />
                            Healing is not a destination, it's a way of walking.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
                            <MagneticButton onClick={scrollToContent} className="btn-premium-primary group shadow-2xl">
                                <span>Begin the Journey</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>

                            <Link href="/story">
                                <MagneticButton className="btn-premium-outline bg-white/20 backdrop-blur-sm">
                                    Read Stories
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ===== BENTO GRID LAYOUT ===== */}
            <section id="story" className="py-32 px-4 md:px-6 relative bg-noise z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 grid md:grid-cols-2 gap-16 items-end"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-emerald-950 leading-tight">
                            The Earth <br />
                            <span className="text-emerald-700 italic">Heals Us.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-xl text-stone-700 font-light leading-relaxed border-l-4 border-emerald-100 pl-8">
                                "The woods don't judge. The waves don't ask for a reason. They simply hold space for the whispers we are finally ready to speak."
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
                        {/* 1. Feature Image */}
                        <TiltCard className="md:col-span-2 md:row-span-2">
                            <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-emerald-950">
                                <img
                                    src="https://images.unsplash.com/photo-1728125771015-68c44a4819cc?w=1200"
                                    alt="Forest path"
                                    className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-110 opacity-70"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent p-12 flex flex-col justify-end">
                                    <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold mb-3">Narrative</span>
                                    <h3 className="text-white text-4xl md:text-5xl font-serif italic">Walking Back <br />To Life.</h3>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 2. Gentle Healing Card */}
                        <TiltCard className="md:col-span-1">
                            <div className="card-premium h-full p-10 flex flex-col justify-between group hover:bg-emerald-50">
                                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <Heart className="w-7 h-7 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-3 text-emerald-950">Gentle Healing</h3>
                                    <p className="text-stone-600 font-light italic">Soft movements for hard days.</p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 3. Community (Dark Card) */}
                        <TiltCard className="md:col-span-1 md:row-span-2">
                            <div className="card-premium-dark h-full p-12 flex flex-col justify-between relative overflow-hidden bg-emerald-950">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px]" />

                                <div>
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8">
                                        <Footprints className="w-7 h-7 text-emerald-300" />
                                    </div>
                                    <h3 className="text-4xl font-serif text-white mb-6 leading-tight">Shared <br />Path.</h3>
                                    <p className="text-emerald-100/60 font-light leading-relaxed text-lg">
                                        No one walks alone. Our stories are the maps for those behind us.
                                    </p>
                                </div>

                                <Link href="/contact" className="mt-8 flex items-center gap-3 text-emerald-400 hover:text-white transition-colors group text-lg">
                                    <span>Connect</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </TiltCard>

                        {/* 4. New Beginnings */}
                        <TiltCard className="md:col-span-1">
                            <div className="card-premium h-full p-10 flex flex-col justify-between hover:border-teal-200">
                                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center group">
                                    <Sunrise className="w-7 h-7 text-teal-600 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-3 text-emerald-950">New Light</h3>
                                    <p className="text-stone-600 font-light italic">Every sunrise is an invitation.</p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 5. Quote Block */}
                        <motion.div
                            className="md:col-span-2 bg-emerald-950 rounded-[3rem] p-16 flex items-center justify-center text-center relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <div className="absolute inset-0 bg-noise opacity-20" />
                            <p className="text-3xl md:text-4xl font-serif text-emerald-100/80 leading-snug relative z-10 italic">
                                "The whispers of the path <br /> are finally <span className="text-white font-medium not-italic">shouting for joy.</span>"
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL FEED (Full Width) ===== */}
            <SocialFeed />

            {/* ===== MINIMALIST CTA ===== */}
            <section className="py-40 px-4 bg-white relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-6xl md:text-[8rem] font-serif text-emerald-950 mb-12 opacity-[0.15] absolute inset-0 flex items-center justify-center pointer-events-none tracking-tighter">
                            WALK WITH US
                        </h2>
                        <div className="relative z-10 flex flex-col items-center gap-10">
                            <h3 className="text-4xl md:text-5xl font-serif text-emerald-950">Ready to begin your story?</h3>
                            <Link href="/story">
                                <MagneticButton className="btn-premium-primary text-xl px-12 py-5 shadow-2xl">
                                    Explore The Archive
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
