
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { BookOpen, Mic, Archive, Mail, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Interactions";

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
        <main className="min-h-screen bg-[#050505] text-white selection:bg-desert-sand selection:text-black overflow-hidden relative">

            <HeroScene />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none z-[2]" />

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-32">

                {/* Minimalist Hero */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-32 z-20"
                >
                    <div className="flex flex-col items-center">
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.2em" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-desert-sand text-xs uppercase mb-6 block font-mono"
                        >
                            Advocating for the Silent
                        </motion.span>
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-4 font-mono leading-none">
                            UNSPOKEN<span className="text-desert-sand">.</span>
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl font-serif italic tracking-wider max-w-2xl mx-auto leading-relaxed">
                            A sanctuary for stories that weigh heavy in the heart, but never reach the tongue.
                        </p>

                        <div className="flex gap-6 mt-12">
                            <Magnetic>
                                <Link href="/story">
                                    <Button size="lg" className="rounded-full bg-white text-black hover:bg-desert-sand transition-colors px-10 py-7 text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        The Narrative <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/unspoken">
                                    <Button variant="secondary" size="lg" className="rounded-full border-white/10 hover:border-white/40 transition-colors px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5">
                                        The Platform
                                    </Button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>

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
                                description="From the depths of silence to the dawn of connection. A first-hand account of the unspoken battle."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-br from-neutral-900 to-[#050505] border border-white/5" />}
                                icon={<BookOpen className="h-5 w-5" />}
                                className="md:col-span-2"
                            />
                        </Link>

                        <Link href="/unspoken">
                            <BentoGridItem
                                title="Platform"
                                description="Safe, anonymous, essential. Launching 2024."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-[#050505] relative overflow-hidden ring-1 ring-inset ring-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-desert-sand/20 to-transparent" />
                                </div>}
                                icon={<Mic className="h-5 w-5" />}
                            />
                        </Link>

                        <Link href="/archive">
                            <BentoGridItem
                                title="The Archive"
                                description="1,200+ raw video moments capturing the human condition."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-tr from-neutral-950 to-neutral-900 border border-white/5" />}
                                icon={<Archive className="h-5 w-5" />}
                            />
                        </Link>

                        <Link href="/contact" className="md:col-span-2">
                            <BentoGridItem
                                title="Contact"
                                description="Speaking, coaching, and collaboration inquiries. Together, we break the silence."
                                header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-br from-neutral-800/20 to-neutral-900/50 border border-white/5" />}
                                icon={<Mail className="h-5 w-5" />}
                                className="md:col-span-2"
                            />
                        </Link>
                    </BentoGrid>
                </motion.div>
            </section>

            {/* Signature Footer */}
            <footer className="relative z-10 py-20 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="text-sm font-mono tracking-widest text-desert-sand uppercase mb-4 md:mb-0">
                        &copy; 2025 Steven Whyte. All Truths Reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-mono uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-desert-sand transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-desert-sand transition-colors">Terms</Link>
                        <Link href="/media-kit" className="hover:text-desert-sand transition-colors">Media Kit</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
