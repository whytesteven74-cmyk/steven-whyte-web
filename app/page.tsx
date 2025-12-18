
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { BookOpen, Mic, Archive, Mail, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Interactions";
import { BreathingUI } from "@/components/ui/BreathingUI";
import { AffirmationCard } from "@/components/ui/AffirmationCard";

// Dynamically import 3D Scene
const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-transparent" />
});

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
    return (
        <main className="min-h-screen bg-sand-100 text-slate-900 selection:bg-rose-200 selection:text-slate-900 overflow-hidden relative">

            <HeroScene />

            {/* Subtle Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-50/20 to-sand-100 pointer-events-none z-[2]" />

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-32">

                {/* Wellness Hero */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16 z-20"
                >
                    <div className="flex flex-col items-center text-center">
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.2em" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-clay text-xs uppercase mb-4 block font-mono font-bold"
                        >
                            Mental Health Advocate | Author | Coach
                        </motion.span>
                        <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-slate-900 mb-6 font-mono leading-none">
                            UNSPOKEN<span className="text-clay">.</span>
                        </h1>
                        <p className="text-slate-light text-xl md:text-2xl font-serif italic tracking-wider max-w-2xl mx-auto leading-relaxed">
                            "Breaking the silence around men's mental health, one unspoken truth at a time."
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 mb-20">
                            <Magnetic>
                                <Link href="/story">
                                    <Button size="lg" className="rounded-full bg-clay text-white hover:bg-clay/90 transition-colors px-10 py-7 text-lg font-bold shadow-soft">
                                        The Narrative <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/unspoken">
                                    <Button variant="outline" size="lg" className="rounded-full border-clay/10 hover:border-clay/40 transition-colors px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/40 text-clay">
                                        The Platform
                                    </Button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>

                {/* Breathing & Affirmation Layer */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mb-32 w-full max-w-6xl relative z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <BreathingUI />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <AffirmationCard />
                    </motion.div>
                </div>

                {/* Bento Grid Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-6xl z-20"
                >
                    <BentoGrid>
                        <Link href="/story" className="md:col-span-2">
                            <BentoGridItem
                                title="The Journey"
                                description="Mental health and physical wellbeing. A first-hand account of the unspoken battle and the path to light."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-br from-rose-100 to-sage-100 border border-white/40" />}
                                icon={<BookOpen className="h-5 w-5" />}
                                className="md:col-span-2"
                            />
                        </Link>

                        <Link href="/unspoken">
                            <BentoGridItem
                                title="Community Hub"
                                description="A safe space for collective healing. Launching soon."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-white/60 relative overflow-hidden ring-1 ring-inset ring-clay/5">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-sage-100/40 to-transparent" />
                                </div>}
                                icon={<Mic className="h-5 w-5" />}
                            />
                        </Link>

                        <Link href="/archive">
                            <BentoGridItem
                                title="Archive"
                                description="Documenting the raw human experience. Moments of stillness and strength."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-tr from-sand-100 to-sage-50 border border-white/40" />}
                                icon={<Archive className="h-5 w-5" />}
                            />
                        </Link>

                        <Link href="/contact" className="md:col-span-2">
                            <BentoGridItem
                                title="Voice Your Story"
                                description="Speaking, advocacy, and shared growth. Breaking the silence together."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-br from-slate-well/50 to-rose-50 border border-white/40" />}
                                icon={<Mail className="h-5 w-5" />}
                                className="md:col-span-2"
                            />
                        </Link>
                    </BentoGrid>
                </motion.div>
            </section>

            {/* Signature Footer */}
            <footer className="relative z-10 py-20 border-t border-clay/5 bg-sand-50">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
                    <p className="text-sm font-mono tracking-widest text-clay uppercase mb-4 md:mb-0">
                        &copy; 2025 Steven Whyte. Wellness & Truth.
                    </p>
                    <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-slate-500">
                        <Link href="/privacy" className="hover:text-clay transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-clay transition-colors">Terms</Link>
                        <Link href="/media-kit" className="hover:text-clay transition-colors">Media Kit</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
