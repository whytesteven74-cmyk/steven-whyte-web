"use client";

import { motion } from "framer-motion";
import { VideoCard } from "@/components/social/VideoCard";
import { socialFeedData } from "@/data/social-feed";
import { ArrowRight } from "lucide-react";

export const SocialFeed = () => {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-2">
                        Moments of <i className="text-emerald-700">Creation.</i>
                    </h2>
                </div>
                <a href="https://tiktok.com/@stevenwhyte" target="_blank" className="hidden md:flex items-center gap-2 text-stone-900 border-b border-stone-200 pb-1 hover:border-emerald-600 transition-colors">
                    <span>View all on TikTok</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Horizontal Scroll Container (Apple Style) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 px-6 gap-6 scrollbar-hide">
                {socialFeedData.map((post, index) => (
                    <motion.div
                        key={post.id}
                        className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <VideoCard post={post} />
                    </motion.div>
                ))}
                {/* Spacer for end of list padding */}
                <div className="w-6 flex-shrink-0" />
            </div>
        </section>
    );
};
