"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Footprints, Sunrise, ArrowRight, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SocialFeed } from "@/components/social/SocialFeed";

// ============================================
// PREMIUM SAGE GREEN HOMEPAGE
// ============================================

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const scrollToContent = () => {
        const element = document.getElementById("story");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-white">
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-sage">
                {/* Parallax Background Elements */}
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 opacity-40">
                        <div className="blur-circle top-20 left-10 w-64 h-64 bg-emerald-300 animate-pulse-slow"></div>
                        <div className="blur-circle bottom-20 right-10 w-96 h-96 bg-green-300 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                        <div className="blur-circle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ y: textY }}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10"
                    >
                        <div className="inline-block mb-2">
                            <span className="text-sm tracking-[0.2em] text-emerald-700 uppercase font-semibold opacity-80">
                                A Journey of Hope
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-6 leading-[1.1] font-medium tracking-tight">
                            You Are Not Alone <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                in Your Healing
                            </span>
                        </h1>

                        <p className="text-stone-600 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            If you're feeling trapped by trauma or struggling with mental health,
                            this is a gentle reminder that healing is possible. Nature is waiting.
                            Hope is real.
                        </p>

                        <div className="flex gap-6 justify-center items-center flex-wrap">
                            <MagneticButton onClick={scrollToContent} className="btn-primary-sage group">
                                <span className="relative z-10">Begin the Journey</span>
                            </MagneticButton>

                            <Link href="/story">
                                <MagneticButton className="btn-outline-sage">
                                    Read Stories of Hope
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer p-4 hover:scale-110 transition-transform"
                    onClick={scrollToContent}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-emerald-600/70" />
                </motion.div>
            </section>

            {/* ===== STORY SECTION (Asymmetric Layout) ===== */}
            <section id="story" className="py-32 px-4 bg-section-sage relative overflow-hidden bg-noise">
                <div className="max-w-7xl mx-auto">
                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl text-stone-800 mb-8 font-medium tracking-tight">My Story</h2>
                        <p className="text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
                            A journey that began with pain transformed into a path of hope,
                            connection, and gentle healing.
                        </p>
                    </motion.div>

                    {/* Editorial Layout */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32">
                        {/* Image - Spans 5 columns */}
                        <motion.div
                            className="lg:col-span-5 lg:sticky lg:top-32"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1728125771015-68c44a4819cc?w=800&q=80"
                                    alt="Healing journey through nature"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Text Content - Spans 7 columns */}
                        <div className="lg:col-span-7 space-y-16 py-8">
                            {[
                                "I know what it feels like to be trapped. Childhood trauma left wounds that felt impossible to heal.",
                                "Traditional paths didn't work for me, so I chose something different—walking, moving, being in nature.",
                                "Along the way, I met incredible people who shared their stories with me. People who were also navigating pain, finding their own paths to healing.",
                                "Their courage inspired me to share this journey with you. If you're reading this and feeling stuck, please know—there is hope."
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light border-l-2 border-emerald-200 pl-8"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </div>

                    {/* Three Pillars - Staggered Grid */}
                    <div className="grid md:grid-cols-3 gap-8 relativer z-10">
                        {[
                            {
                                icon: Heart,
                                color: "emerald",
                                title: "Gentle Healing",
                                desc: "Finding peace through nature, movement, and self-compassion.",
                                delay: 0.1
                            },
                            {
                                icon: Footprints,
                                color: "green",
                                title: "Shared Stories",
                                desc: "Listening to and learning from others on similar journeys.",
                                delay: 0.2
                            },
                            {
                                icon: Sunrise,
                                color: "teal",
                                title: "New Beginnings",
                                desc: "Every day is a fresh start, a chance to try again.",
                                delay: 0.3
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: item.delay }}
                                className={`text-center p-10 card-glass-${item.color} group hover:bg-white/80 transition-colors duration-500`}
                            >
                                <div className={`icon-circle-${item.color} mb-8 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`w-10 h-10 text-${item.color}-700`} />
                                </div>
                                <h3 className={`mb-4 text-${item.color}-800 text-2xl font-medium tracking-tight`}>{item.title}</h3>
                                <p className="text-stone-600 leading-relaxed text-lg font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL FEED SECTION ===== */}
            <SocialFeed />

            {/* ===== CTA SECTION ===== */}
            <section className="py-32 px-4 bg-white relative">
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl text-stone-800 mb-8 font-medium tracking-tight">
                            Continue the Journey
                        </h2>
                        <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Explore more stories, connect with the community, and discover
                            resources for your own healing path.
                        </p>
                        <div className="flex gap-6 justify-center flex-wrap">
                            <Link href="/story">
                                <MagneticButton className="btn-primary-sage inline-flex items-center gap-3">
                                    Read My Full Story
                                    <ArrowRight className="w-5 h-5" />
                                </MagneticButton>
                            </Link>
                            <Link href="/archive">
                                <MagneticButton className="btn-outline-sage">
                                    Browse Archive
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-footer-sage py-24 px-4 border-t border-emerald-100 relative bg-noise">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div className="md:col-span-2 pr-8">
                            <div className="flex items-center gap-2 text-stone-800 mb-6">
                                <Heart className="w-6 h-6 text-emerald-600 fill-emerald-600/20" />
                                <span className="font-medium text-xl tracking-tight">Healing Journey</span>
                            </div>
                            <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">
                                This journey is for anyone feeling lost, stuck, or struggling.
                                You deserve healing. You deserve peace. You deserve to know you're not alone.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-stone-800 mb-6 text-sm font-semibold uppercase tracking-wider">Explore</h3>
                            <ul className="space-y-4">
                                {[
                                    { href: "/story", label: "My Story" },
                                    { href: "/archive", label: "Archive" },
                                    { href: "/contact", label: "Contact" },
                                    { href: "/media-kit", label: "Media Kit" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-stone-600 hover:text-emerald-600 transition-colors block text-lg"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h3 className="text-stone-800 mb-6 text-sm font-semibold uppercase tracking-wider">Connect</h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:hello@stevenwhyte.co.uk"
                                    className="flex items-center gap-3 text-stone-600 hover:text-emerald-600 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-lg">Email Me</span>
                                </a>
                                <div className="flex items-center gap-3 text-stone-600">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-lg">Europe</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="pt-8 border-t border-emerald-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-stone-500 text-sm">
                            © {new Date().getFullYear()} Steven Whyte.
                        </p>
                        <p className="text-stone-500 text-sm font-medium">
                            If you're in crisis, please reach out for professional help. 💚
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
