"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Heart, Footprints, Sunrise, ArrowRight, Mail, MapPin } from "lucide-react";

// ============================================
// FIGMA SAGE GREEN HOMEPAGE
// ============================================

export default function Home() {
    const scrollToContent = () => {
        const element = document.getElementById("story");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-white">
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-sage">
                {/* Soft Background Blur Circles */}
                <div className="absolute inset-0 opacity-40">
                    <div className="blur-circle top-20 left-10 w-64 h-64 bg-emerald-300"></div>
                    <div className="blur-circle bottom-20 right-10 w-96 h-96 bg-green-300"></div>
                    <div className="blur-circle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-block mb-4">
                            <span className="text-sm tracking-widest text-emerald-600 uppercase font-semibold">
                                A Journey of Hope
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-relaxed font-medium">
                            You Are Not Alone in Your Healing
                        </h1>

                        <p className="text-stone-700 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                            If you're feeling trapped by trauma or struggling with mental health,
                            this is a gentle reminder that healing is possible. Nature is waiting.
                            Hope is real.
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={scrollToContent}
                                className="btn-primary-sage"
                            >
                                Begin the Journey
                            </button>
                            <Link href="/story" className="btn-outline-sage">
                                Read Stories of Hope
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
                    onClick={scrollToContent}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-emerald-600" />
                </motion.div>
            </section>

            {/* ===== STORY SECTION ===== */}
            <section id="story" className="py-20 px-4 bg-section-sage">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-medium">My Story</h2>
                        <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
                            A journey that began with pain transformed into a path of hope,
                            connection, and gentle healing.
                        </p>
                    </motion.div>

                    {/* Two Column Story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1728125771015-68c44a4819cc?w=800"
                                alt="Healing journey through nature"
                                className="rounded-3xl shadow-xl w-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <p className="text-stone-700 leading-relaxed">
                                I know what it feels like to be trapped. Childhood trauma left wounds that felt
                                impossible to heal. Traditional paths didn't work for me, so I chose something different—
                                walking, moving, being in nature.
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                Along the way, I met incredible people who shared their stories with me.
                                People who were also navigating pain, finding their own paths to healing.
                                Their courage inspired me to share this journey with you.
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                If you're reading this and feeling stuck, please know—there is hope.
                                Healing doesn't always look the way we expect. Sometimes it's as simple
                                as taking a walk outside, breathing fresh air, and remembering you're not alone.
                            </p>
                        </motion.div>
                    </div>

                    {/* Three Pillars */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-center p-8 card-glass"
                        >
                            <div className="icon-circle-emerald mb-6 mx-auto">
                                <Heart className="w-10 h-10 text-emerald-700" />
                            </div>
                            <h3 className="mb-3 text-emerald-800 text-xl font-medium">Gentle Healing</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Finding peace through nature, movement, and self-compassion
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center p-8 card-glass-green"
                        >
                            <div className="icon-circle-green mb-6 mx-auto">
                                <Footprints className="w-10 h-10 text-green-700" />
                            </div>
                            <h3 className="mb-3 text-green-800 text-xl font-medium">Shared Stories</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Listening to and learning from others on similar journeys
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center p-8 card-glass-teal"
                        >
                            <div className="icon-circle-teal mb-6 mx-auto">
                                <Sunrise className="w-10 h-10 text-teal-700" />
                            </div>
                            <h3 className="mb-3 text-teal-800 text-xl font-medium">New Beginnings</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Every day is a fresh start, a chance to try again
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-medium">
                            Continue the Journey
                        </h2>
                        <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Explore more stories, connect with the community, and discover
                            resources for your own healing path.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/story" className="btn-primary-sage inline-flex items-center gap-2">
                                Read My Full Story
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/archive" className="btn-outline-sage">
                                Browse Archive
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-footer-sage py-16 px-4 border-t-4 border-emerald-300">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* About */}
                        <div>
                            <h3 className="text-stone-700 mb-4 text-lg font-medium">A Message of Hope</h3>
                            <p className="text-stone-600 mb-4 leading-relaxed">
                                This journey is for anyone feeling lost, stuck, or struggling.
                                You deserve healing. You deserve peace. You deserve to know you're not alone.
                            </p>
                            <div className="flex items-center gap-2 text-stone-600">
                                <Heart className="w-4 h-4 text-green-500" />
                                <span>Made with love and hope</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-stone-700 mb-4 text-lg font-medium">Explore</h3>
                            <ul className="space-y-2">
                                {[
                                    { href: "/story", label: "My Story" },
                                    { href: "/archive", label: "Archive" },
                                    { href: "/contact", label: "Contact" },
                                    { href: "/media-kit", label: "Media Kit" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-stone-600 hover:text-green-600 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h3 className="text-stone-700 mb-4 text-lg font-medium">Connect</h3>
                            <p className="text-stone-600 mb-4 leading-relaxed">
                                Want to share your story or journey? I'd love to hear from you.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2 text-stone-600">
                                    <Mail className="w-5 h-5 text-green-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-500">Reach out</p>
                                        <a
                                            href="mailto:hello@stevenwhyte.co.uk"
                                            className="hover:text-green-600 transition-colors"
                                        >
                                            hello@stevenwhyte.co.uk
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 text-stone-600">
                                    <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-500">Currently wandering</p>
                                        <p>Somewhere in Europe 🌍</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="pt-8 border-t border-green-200">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                            <p className="text-stone-500 text-sm">
                                © {new Date().getFullYear()} Steven Whyte. All stories shared with consent and respect.
                            </p>
                            <p className="text-stone-500 text-sm">
                                If you're in crisis, please reach out for professional help. You matter. 💚
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
