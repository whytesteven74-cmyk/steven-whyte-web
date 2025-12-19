
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, BookOpen, Compass, Sunrise, MessageCircle, Users, TrendingUp } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
    return (
        <main className="min-h-screen bg-mint text-charcoal overflow-hidden">

            {/* Hero Section - Figma Style */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32">
                {/* Soft Gradient Background */}
                <div className="absolute inset-0 bg-hero-gradient opacity-60" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="relative z-10 text-center max-w-4xl mx-auto"
                >
                    {/* Section Label */}
                    <motion.span
                        variants={fadeInUp}
                        className="section-label inline-flex items-center gap-2"
                    >
                        <Heart className="w-3 h-3 text-emerald-500" />
                        A Journey of Hope
                    </motion.span>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-charcoal-800 mb-6 leading-[0.9]"
                    >
                        Stories of Healing
                        <br />
                        <span className="text-emerald-700">& Resilience</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-charcoal-500 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Explore personal stories of healing and resilience while gaining insights into the power of nature and community.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/story" className="btn-primary inline-flex items-center gap-2">
                            Read My Story <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/archive" className="btn-secondary">
                            Explore Archive
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Path Section - 3 Pillars */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.span variants={fadeInUp} className="section-label">The Path I Walked</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-charcoal-800">
                            Three Pillars of My Journey
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Sunrise, title: "Healing", desc: "Finding light in the darkest moments through nature and self-discovery." },
                            { icon: BookOpen, title: "Stories", desc: "Sharing the unspoken truths that connect us all as humans." },
                            { icon: Compass, title: "New Beginnings", desc: "Every ending is a doorway to something beautiful and new." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="card text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors">
                                    <item.icon className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal-800 mb-3">{item.title}</h3>
                                <p className="text-charcoal-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Cards Section */}
            <section className="py-24 px-6 bg-mint-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.span variants={fadeInUp} className="section-label">My Travel Stories</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-charcoal-800">
                            Places That Shaped Me
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { location: "United Kingdom", date: "2023", color: "from-emerald-400 to-emerald-600" },
                            { location: "France", date: "2022", color: "from-sky-400 to-sky-600" },
                            { location: "Germany", date: "2021", color: "from-amber-400 to-amber-600" },
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group cursor-pointer"
                            >
                                <div className={`h-64 rounded-4xl bg-gradient-to-br ${story.color} mb-4 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    <span className="absolute top-4 left-4 bg-white/90 text-charcoal-700 text-xs font-medium px-3 py-1 rounded-full">
                                        {story.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-charcoal-800">{story.location}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials/Voices Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.span variants={fadeInUp} className="section-label inline-flex items-center gap-2">
                            <Heart className="w-3 h-3 text-emerald-500" />
                            Voices of Support
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-charcoal-800">
                            What People Are Saying
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { quote: "Steven's story touched my heart. His honesty about mental health struggles is so important.", author: "Sarah M." },
                            { quote: "Finding this community has been life-changing. You're not alone in your journey.", author: "James T." },
                            { quote: "The power of sharing our stories cannot be underestimated. Thank you for your courage.", author: "Emma L." },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="card"
                            >
                                <MessageCircle className="w-8 h-8 text-emerald-200 mb-4" />
                                <p className="text-charcoal-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-2">
                                    <Heart className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-charcoal-700">{testimonial.author}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-6 bg-emerald-700 text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    >
                        {[
                            { icon: Users, value: "10K+", label: "Lives Touched" },
                            { icon: BookOpen, value: "126", label: "Stories Shared" },
                            { icon: Heart, value: "50+", label: "Communities" },
                            { icon: TrendingUp, value: "3", label: "Countries" },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-200" />
                                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                                <div className="text-emerald-200 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-charcoal-800 text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-emerald-400" />
                        <span className="font-bold">Steven Whyte</span>
                    </div>
                    <div className="flex gap-8 text-sm text-charcoal-400">
                        <Link href="/story" className="hover:text-white transition-colors">Story</Link>
                        <Link href="/archive" className="hover:text-white transition-colors">Archive</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                    <p className="text-sm text-charcoal-500">© 2025 Steven Whyte. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
