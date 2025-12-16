
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
    return (
        <main className="min-h-screen bg-soft-black text-white selection:bg-desert-sand selection:text-black overflow-hidden relative">

            {/* Background Texture / Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-soft-black to-soft-black pointer-events-none" />

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-10">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="text-center max-w-4xl"
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] font-medium text-desert-sand border border-desert-sand/20 rounded-full uppercase">
                            The Journey Home
                        </span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight mb-8 leading-[0.9]">
                        <span className="text-desert-sand italic block text-4xl md:text-5xl mb-2 font-normal">Unspoken</span>
                        Truths.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Breaking the silence around men's mental health. A sanctuary for the stories we carry but never speak.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex gap-4 justify-center mb-20">
                        <Link href="/story">
                            <Button size="lg" className="rounded-full">Read the Story</Button>
                        </Link>
                        <Link href="/unspoken">
                            <Button variant="secondary" size="lg" className="rounded-full">Enter Platform</Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
                >
                    <Link href="/archive">
                        <Card className="h-full flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-slate-900/50 to-transparent">
                            <h3 className="text-2xl font-serif text-desert-sand mb-2">The Archive</h3>
                            <p className="text-gray-500 mb-8 max-w-xs">Explore 1,200+ raw, unfiltered moments of human experience.</p>
                            <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                Browse Collection &rarr;
                            </div>
                        </Card>
                    </Link>

                    <Link href="/media-kit">
                        <Card className="h-full flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-slate-900/50 to-transparent">
                            <h3 className="text-2xl font-serif text-white mb-2">Press & Media</h3>
                            <p className="text-gray-500 mb-8 max-w-xs">Resources, bio, and visual assets for event organizers.</p>
                            <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                View Kit &rarr;
                            </div>
                        </Card>
                    </Link>

                    <Link href="/contact">
                        <Card className="h-full flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-desert-sand/5 to-transparent border-desert-sand/10">
                            <h3 className="text-2xl font-serif text-clay mb-2">Connect</h3>
                            <p className="text-gray-500 mb-8 max-w-xs">Speaking inquiries, workshops, and personal mentorship.</p>
                            <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                Get in Touch &rarr;
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
