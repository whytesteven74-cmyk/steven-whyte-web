
"use client";

import React, { useState, useMemo } from "react";
import { TikTokEmbed } from "../components/TikTokEmbed";
import manifest from "@/lib/video-manifest.json";
import { Search, Film } from "lucide-react";

export default function ArchivePage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredVideos = useMemo(() => {
        if (!searchQuery) return manifest;
        const query = searchQuery.toLowerCase();
        return manifest.filter(video =>
            video.title.toLowerCase().includes(query) ||
            video.hashtags.some(tag => tag.toLowerCase().includes(query))
        );
    }, [searchQuery]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-mono font-bold text-slate-900 tracking-tighter mb-4">
                        THE ARCHIVE<span className="text-clay">.</span>
                    </h1>
                    <p className="text-slate-600 text-lg font-serif italic">
                        A digital sanctuary of captured moments, documenting the raw human experience and the journey of the unspoken.
                    </p>
                </div>

                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-clay transition-colors" />
                    <input
                        type="text"
                        placeholder="Search hashtags or topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-clay/10 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/40 transition-all shadow-soft"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredVideos.map((video) => (
                    <div key={video.id} className="group/card flex flex-col space-y-4">
                        <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-soft border border-clay/5 group-hover/card:border-clay/20 transition-all relative">
                            <TikTokEmbed videoId={video.id} />
                            <div className="absolute inset-0 pointer-events-none border-[8px] border-white/5 rounded-3xl" />
                        </div>
                        <div className="px-2">
                            <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-slate-900 mb-1 truncate">
                                {video.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {video.hashtags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono font-bold text-clay uppercase bg-clay/5 px-2 py-0.5 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredVideos.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                    <Film className="w-12 h-12 text-slate-200 mb-4" />
                    <p className="text-slate-400 font-serif italic text-xl">
                        No unspoken moments found for "{searchQuery}"
                    </p>
                </div>
            )}

            <div className="mt-24 pt-12 border-t border-clay/5 text-center text-slate-400 text-xs font-mono uppercase tracking-[0.2em]">
                <p>
                    {manifest.length} Moments Captured • Synchronized with Local Archive
                </p>
            </div>
        </div>
    );
}
