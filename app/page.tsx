"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Footprints, Sunrise, ArrowRight, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialFeed } from "@/components/social/SocialFeed";
import DynamicHeroScene from "@/components/3d/DynamicHeroScene";

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

            {/* ===== CINEMATIC HERO ===== */}
            <div className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
                {/* Background Gradient - "The Northern Lights" feel */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
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
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Native iOS ease
                        className="flex flex-col items-center gap-8"
                    >
                        {/* Label Pill */}
                        <span className="px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-stone-500 shadow-sm">
                            The Journey Home
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.0] tracking-tight font-serif text-emerald-950 text-gradient-premium">
                            You Are Not Alone <br />
                            <i className="font-serif font-light text-emerald-700/80">in Your Healing.</i>
                        </h1>

                        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
                            A sanctuary for stories, connection, and gentle recovery. <br className="hidden md:block" />
                            Nature is waiting. Hope is real.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
                            <MagneticButton onClick={scrollToContent} className="btn-premium-primary group">
                                <span>Begin the Journey</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>

                            <Link href="/story">
                                <MagneticButton className="btn-premium-outline">
                                    Read Stories
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mouse/Scroll hint */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-stone-300 to-transparent" />
                </motion.div>
            </div>

            {/* ===== BENTO GRID LAYOUT ===== */}
            <section id="story" className="py-32 px-4 md:px-6 relative bg-noise">
                <div className="max-w-7xl mx-auto">

                    {/* Editorial Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 grid md:grid-cols-2 gap-10 items-end"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-emerald-950">
                            A Path Forged <br />
                            <span className="text-emerald-600 italic">Through Nature.</span>
                        </h2>
                        <p className="text-xl text-stone-600 font-light leading-relaxed pb-2">
                            I know the weight of feeling stuck. My journey began in pain but found its rhythm in the quiet of the woods and the stories of strangers.
                        </p>
                    </motion.div>

                    {/* The Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

                        {/* 1. Feature Image (Large Square) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1728125771015-68c44a4819cc?w=1200"
                                alt="Forest path"
                                className="object-cover w-full h-full transition-transform duration-[1s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-2">My Story</span>
                                <h3 className="text-white text-4xl font-serif italic">Walking Back to Life</h3>
                            </div>
                        </motion.div>

                        {/* 2. Gentle Healing Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="card-premium md:col-span-1 p-8 flex flex-col justify-between group hover:bg-emerald-50/50"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif mb-2 text-emerald-950">Gentle Healing</h3>
                                <p className="text-stone-600 text-sm">Peace through movement and self-compassion.</p>
                            </div>
                        </motion.div>

                        {/* 3. Community (Dark Card) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="card-premium-dark md:col-span-1 md:row-span-2 p-10 flex flex-col justify-between relative overflow-hidden"
                        >
                            {/* Abstract decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                    <Footprints className="w-6 h-6 text-emerald-300" />
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-4">You Are <br />Connected.</h3>
                                <p className="text-emerald-100/80 leading-relaxed">
                                    "We heal in community. Every story shared lightens the load for someone else."
                                </p>
                            </div>

                            <Link href="/contact" className="mt-8 flex items-center gap-2 text-white/90 hover:text-white group">
                                <span>Join Us</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* 4. New Beginnings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="card-premium md:col-span-1 p-8 flex flex-col justify-between"
                        >
                            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                <Sunrise className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif mb-2 text-emerald-950">Fresh Starts</h3>
                                <p className="text-stone-600 text-sm">Every sunrise is a chance to begin again.</p>
                            </div>
                        </motion.div>

                        {/* 5. Quote/Text Block */}
                        <motion.div
                            className="md:col-span-2 bg-stone-100 rounded-[2.5rem] p-10 flex items-center justify-center text-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-2xl md:text-3xl font-serif text-stone-500 leading-snug">
                                "Trauma interrupted my life, but <span className="text-emerald-800">nature returned it to me.</span>"
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ===== SOCIAL FEED (Full Width) ===== */}
            <div className="relative z-10">
                <SocialFeed />
            </div>


            {/* ===== MINIMALIST CTA ===== */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-emerald-950 mb-8">
                            Ready to Walk?
                        </h2>
                        <div className="flex justify-center gap-6">
                            <Link href="/story" className="btn-premium-primary text-lg px-8 py-4">
                                Read My Story
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-stone-50 py-24 px-4 border-t border-stone-200">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <span className="font-serif text-2xl text-emerald-900 block mb-6">Healing Journey.</span>
                        <p className="text-stone-500 max-w-sm">
                            A digital space for mental health, nature, and the stories that connect us all.
                        </p>
                    </div>

                    <div>
                        <ul className="space-y-4 text-stone-600">
                            <li><Link href="/story" className="hover:text-emerald-800 transition-colors">Story</Link></li>
                            <li><Link href="/archive" className="hover:text-emerald-800 transition-colors">Archive</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-800 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-stone-400 text-sm">
                            © {new Date().getFullYear()} Steven Whyte.<br />
                            Europe.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
