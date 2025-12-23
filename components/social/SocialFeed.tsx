"use client";

import { motion } from "framer-motion";
import { VideoCard } from "@/components/social/VideoCard";
import { socialFeedData } from "@/data/social-feed";
import { ArrowRight } from "lucide-react";

export const SocialFeed = () => {
    return (
        <section className="py-24 px-4 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl text-stone-900 mb-4 font-medium tracking-tight">
                            Moments of <span className="text-emerald-600 font-serif italic">Connection</span>
                        </h2>
                        <p className="text-stone-600 text-lg max-w-xl font-light">
                            Short stories, daily reminders, and glimpses into the journey.
                            A space for quick inspiration and gentle healing.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://tiktok.com/@stevenwhyte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-stone-900 font-medium hover:text-emerald-600 transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span>Follow on TikTok</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {socialFeedData.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <VideoCard post={post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
