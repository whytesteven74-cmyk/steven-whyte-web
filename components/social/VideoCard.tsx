"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Eye } from "lucide-react";
import { SocialPost } from "@/data/social-feed";

export const VideoCard = ({ post }: { post: SocialPost }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isHovered) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log("Autoplay prevented:", error);
                });
            }
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            // Reset to start if preferred, or pause where it is
            // videoRef.current.currentTime = 0; 
            setIsPlaying(false);
        }
    }, [isHovered]);

    return (
        <motion.div
            className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-stone-900 group cursor-pointer border border-white/10 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            {/* Native Video Player */}
            {post.type === 'native' && (
                <video
                    ref={videoRef}
                    src={post.url}
                    poster={post.thumbnail}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            )}

            {/* Glassmorphic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-white text-sm font-medium mb-3 line-clamp-2 drop-shadow-md">
                        {post.caption}
                    </p>

                    <div className="flex items-center gap-4 text-white/90 text-xs font-semibold tracking-wide">
                        <div className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-2 py-1">
                            <Eye className="w-3.5 h-3.5" />
                            <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-2 py-1">
                            <Heart className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{post.likes}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Play Button Indicator (Visible when looking at thumbnail) */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                            <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
