"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, BookOpen, Compass, Sunrise, MessageCircle, Users, TrendingUp, Sparkles, Play } from "lucide-react";

// Modern Components
import { Button } from "@/components/ui/Button";
import { Card, FeatureCard, StatCard, TestimonialCard, StoryCard } from "@/components/ui/Card";
import { Section, SectionHeader, Grid, Hero } from "@/components/ui/Section";

// ============================================
// PAGE DATA
// ============================================

const features = [
    {
        icon: <Sunrise className="w-6 h-6" />,
        title: "Healing Journey",
        description: "Finding light in the darkest moments through vulnerability and authentic self-discovery.",
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Unspoken Stories",
        description: "Sharing the truths we carry inside but are often too afraid to voice.",
    },
    {
        icon: <Compass className="w-6 h-6" />,
        title: "New Beginnings",
        description: "Every ending is a doorway to something beautiful and transformative.",
    },
];

const stories = [
    { title: "The Weight of Silence", location: "United Kingdom", date: "2023", gradient: "from-emerald-500 to-teal-500" },
    { title: "Finding My Voice", location: "France", date: "2022", gradient: "from-sky-500 to-indigo-500" },
    { title: "Breaking Free", location: "Germany", date: "2021", gradient: "from-amber-500 to-orange-500" },
];

const testimonials = [
    { quote: "Steven's story touched my heart. His honesty about mental health struggles is so important.", author: "Sarah M.", role: "Community Member" },
    { quote: "Finding this community has been life-changing. You're not alone in your journey.", author: "James T.", role: "Mental Health Advocate" },
    { quote: "The power of sharing our stories cannot be underestimated. Thank you for your courage.", author: "Emma L.", role: "Therapist" },
];

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Lives Touched" },
    { icon: <BookOpen className="w-6 h-6" />, value: "126", label: "Stories Shared" },
    { icon: <Heart className="w-6 h-6" />, value: "50+", label: "Communities" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "3", label: "Countries" },
];

// ============================================
// HOME PAGE COMPONENT
// ============================================

export default function Home() {
    return (
        <main className="overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <Hero
                label="Mental Health Advocate • Author • Coach"
                title={
                    <>
                        Breaking the{" "}
                        <span className="text-gradient">Silence.</span>
                    </>
                }
                subtitle="Breaking the silence around men's mental health, one unspoken truth at a time."
            >
                <Link href="/story">
                    <Button variant="gradient" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                        Read My Story
                    </Button>
                </Link>
                <Link href="/archive">
                    <Button variant="secondary" size="lg" icon={<Play className="w-5 h-5" />}>
                        Watch Videos
                    </Button>
                </Link>
            </Hero>

            {/* ===== FEATURES / PILLARS ===== */}
            <Section variant="subtle" size="lg">
                <SectionHeader
                    label="The Path I Walked"
                    title="Three Pillars of My Journey"
                    subtitle="Every step has been a lesson, every struggle a stepping stone toward helping others."
                />
                <Grid cols={3} gap="lg">
                    {features.map((feature, i) => (
                        <FeatureCard
                            key={i}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </Grid>
            </Section>

            {/* ===== STORY CARDS ===== */}
            <Section variant="default" size="lg">
                <SectionHeader
                    label="My Travel Stories"
                    title="Places That Shaped Me"
                    subtitle="Each destination brought new perspectives and deeper understanding."
                />
                <Grid cols={3} gap="md">
                    {stories.map((story, i) => (
                        <StoryCard
                            key={i}
                            title={story.title}
                            location={story.location}
                            date={story.date}
                            gradient={story.gradient}
                        />
                    ))}
                </Grid>
            </Section>

            {/* ===== TESTIMONIALS ===== */}
            <Section variant="gradient" size="lg">
                <SectionHeader
                    label="Voices of Support"
                    title="What People Are Saying"
                    subtitle="The impact of sharing our stories ripples outward in unexpected ways."
                />
                <Grid cols={3} gap="md">
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard
                            key={i}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                        />
                    ))}
                </Grid>
            </Section>

            {/* ===== CTA SECTION ===== */}
            <Section variant="dark" size="lg">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Coming Soon
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        The{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                            Unspoken
                        </span>{" "}
                        Platform
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        A safe space for men to share their stories, find support, and discover they're not alone in their struggles.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/unspoken">
                            <Button variant="gradient" size="lg">
                                Learn More
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                                Get Notified
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Section>

            {/* ===== STATS SECTION ===== */}
            <Section variant="default" size="md">
                <Grid cols={4} gap="md">
                    {stats.map((stat, i) => (
                        <StatCard
                            key={i}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </Grid>
            </Section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-gray-950 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">Steven Whyte</span>
                            </div>
                            <p className="text-gray-400 max-w-md leading-relaxed">
                                Breaking the silence around men's mental health. Author, advocate, and founder of the Unspoken movement.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-4 text-gray-100">Navigation</h4>
                            <ul className="space-y-3">
                                {["Story", "Archive", "Contact", "Media Kit"].map((link) => (
                                    <li key={link}>
                                        <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-semibold mb-4 text-gray-100">Connect</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Instagram", url: "https://instagram.com/unspoken1979" },
                                    { name: "TikTok", url: "https://tiktok.com/@stevewhyte171" },
                                    { name: "LinkedIn", url: "#" },
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Steven Whyte. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
