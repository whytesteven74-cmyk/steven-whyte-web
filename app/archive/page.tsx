
import type { Metadata } from "next";
import { TikTokEmbed } from "../components/TikTokEmbed";

export const metadata: Metadata = {
    title: "The Archive | Steven Whyte",
    description: "A library of unspoken moments and stories.",
};

const SAMPLE_VIDEOS = [
    "7517411508884688150",
    "7579267405264768278",
    "7576045773830393111",
    "7571443607689760022",
    "7544749416452853014",
    "7523715353189371158",
    "7523694934692564246",
    "7523143440725462294",
    "7522221138575904022",
    "7521481690796068098",
    "7521415218786880790",
    "7520915799444524310"
];

export default function ArchivePage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h1 className="text-4xl font-light text-slate-dark tracking-tight mb-2">
                        The Archive
                    </h1>
                    <p className="text-slate-500">
                        Selections from the Unspoken Truths library.
                    </p>
                </div>

                <div className="mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 w-full md:w-64 focus:outline-none focus:border-slate-400"
                        disabled
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SAMPLE_VIDEOS.map((id) => (
                    <div key={id} className="aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg border border-slate-200">
                        <TikTokEmbed videoId={id} />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center text-slate-400 text-sm">
                <p>
                    Showing recent uploads. Full archive system in development.
                </p>
            </div>
        </div>
    );
}
