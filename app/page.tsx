"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Footprints, Sunrise, ArrowRight, BookOpen, Utensils, Sparkles, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialFeed } from "@/components/social/SocialFeed";
import { TiltCard } from "@/components/ui/TiltCard";
import DynamicHeroScene from "@/components/3d/DynamicHeroScene";
import { identity } from "@/data/identity";

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
                {identity.whispers.map((text, i) => (
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
                            duration: 25 + i * 10,
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
                    <DynamicHeroScene />
                    <div className="absolute inset-0 bg-hero-premium opacity-80" />
                    <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-emerald-100/50 blur-[120px] mix-blend-multiply animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-100/40 blur-[100px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: "2s" }} />
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
                            {identity.journey.theme}
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tight font-serif text-gradient-premium">
                            A Path Forged <br />
                            <i className="font-serif font-light opacity-80">By Purpose.</i>
                        </h1>

                        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
                            {identity.mission.longDescription}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
                            <MagneticButton onClick={scrollToContent} className="btn-premium-primary group shadow-2xl">
                                <span>The Current Walk</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>

                            <Link href="/archive">
                                <MagneticButton className="btn-premium-outline bg-white/20 backdrop-blur-sm">
                                    The Archive
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ===== BENTO GRID LAYOUT (AUTHENTIC) ===== */}
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
                            The Missions <br />
                            <span className="text-emerald-700 italic">of Awakening.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-xl text-stone-700 font-light leading-relaxed border-l-4 border-emerald-100 pl-8 italic">
                                "{identity.mission.description}"
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
                        {/* 1. Unspoken (App) */}
                        <TiltCard className="md:col-span-2 md:row-span-2">
                            <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-emerald-950">
                                <img
                                    src="https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?w=1200"
                                    alt="Deep connections"
                                    className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent p-12 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-400/20 backdrop-blur-md flex items-center justify-center">
                                            <Globe className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Global Platform</span>
                                    </div>
                                    <h3 className="text-white text-5xl md:text-6xl font-serif mb-6">{identity.projects.unspoken.name}</h3>
                                    <p className="text-emerald-100/70 text-lg max-w-lg font-light leading-relaxed">
                                        {identity.projects.unspoken.description}
                                    </p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 2. Nomad Gourmet (Food) */}
                        <TiltCard className="md:col-span-1">
                            <div className="card-premium h-full p-10 flex flex-col justify-between group hover:bg-stone-100 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <Utensils className="w-7 h-7 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-3 text-emerald-950">{identity.projects.nomadGourmet.name}</h3>
                                    <p className="text-stone-600 font-light italic text-sm">{identity.projects.nomadGourmet.tagline}</p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 3. The Book / Spiral */}
                        <TiltCard className="md:col-span-1 md:row-span-2">
                            <div className="card-premium-dark h-full p-12 flex flex-col justify-between relative overflow-hidden bg-stone-900 border-none">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px]" />

                                <div>
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                                        <BookOpen className="w-7 h-7 text-stone-400" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-6 leading-tight">The Spiral Is <br /> Not a Circle.</h3>
                                    <p className="text-stone-400 font-light leading-relaxed">
                                        {identity.projects.book.description}
                                    </p>
                                </div>

                                <Link href="/story" className="mt-8 flex items-center gap-3 text-emerald-500 hover:text-emerald-400 transition-colors group">
                                    <span>Read Prelude</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </TiltCard>

                        {/* 4. Awakening (Theme) */}
                        <TiltCard className="md:col-span-1">
                            <div className="card-premium h-full p-10 flex flex-col justify-between bg-emerald-50 border-emerald-100">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <Sparkles className="w-7 h-7 text-emerald-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-3 text-emerald-950">Awakening</h3>
                                    <p className="text-emerald-800/60 font-light italic text-sm">Remembering your soul's true frequency.</p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* 5. Heart Block */}
                        <motion.div
                            className="md:col-span-2 bg-emerald-950 rounded-[3rem] p-16 flex items-center justify-center text-center relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <div className="absolute inset-0 bg-noise opacity-20" />
                            <div className="relative z-10 space-y-8 flex flex-col items-center">
                                <Heart className="w-12 h-12 text-emerald-400 opacity-50 fill-emerald-400/10" />
                                <p className="text-3xl md:text-5xl font-serif text-emerald-50 leading-snug italic max-w-2xl">
                                    "{identity.journey.current}"
                                </p>
                                <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-bold">The Path to Presence</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL FEED (Full Width) ===== */}
            <div className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <h2 className="text-4xl font-serif text-emerald-950 italic">Moments on TikTok</h2>
                    <p className="text-stone-500 font-light mt-2 uppercase tracking-widest text-xs">Follow @finedinningonabudget</p>
                </div>
                <SocialFeed />
            </div>

            {/* ===== MINIMALIST CTA (VERIFIED CONTACT) ===== */}
            <section className="py-40 px-4 bg-white relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-6xl md:text-[8rem] font-serif text-emerald-950 mb-12 opacity-[0.05] absolute inset-0 flex items-center justify-center pointer-events-none tracking-tighter uppercase">
                            Connect Direct
                        </h2>
                        <div className="relative z-10 flex flex-col items-center gap-12">
                            <h3 className="text-4xl md:text-6xl font-serif text-emerald-950 max-w-2xl">A soul-rooted connection beyond profit.</h3>
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                                <a href={`mailto:${identity.email}`} className="text-emerald-900 border-b border-emerald-200 py-2 hover:text-emerald-500 transition-colors font-serif text-2xl">
                                    {identity.email}
                                </a>
                                <span className="hidden md:block text-stone-300">/</span>
                                <span className="text-stone-600 font-serif text-2xl">
                                    {identity.phone}
                                </span>
                            </div>
                            <Link href="/contact">
                                <MagneticButton className="btn-premium-primary text-xl px-12 py-5 shadow-2xl">
                                    Message Steven
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
