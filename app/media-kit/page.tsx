
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Kit | Steven Whyte",
    description: "Press assets, bio, and resources for event organizers.",
};

export default function MediaKitPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-light text-slate-dark mb-4 tracking-tight">
                Media Kit
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl">
                Resources for press, podcast hosts, and event organizers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                    <h2 className="text-2xl font-medium text-slate-dark mb-4">Official Bio</h2>
                    <div className="prose prose-slate bg-sand-light/30 p-6 rounded-lg border border-sand-dark/10">
                        <p>
                            Steven Whyte is a mental health advocate, speaker, and storyteller dedicated to breaking the silence surrounding men's emotional well-being.
                        </p>
                        <p>
                            Through his platform "Unspoken Truths," he shares raw, unfiltered narratives about trauma, healing, and self-discovery, challenging societal norms that encourage men to suffer in silence.
                        </p>
                        <div className="mt-4 pt-4 border-t border-sand-dark/10">
                            <button disabled className="text-sm font-bold text-slate-400 cursor-not-allowed">
                                Download Short Bio (PDF)
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-medium text-slate-dark mb-4">Brand Assets</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-6 bg-slate-100 rounded-lg flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-slate-800">Headshots</h3>
                                <p className="text-sm text-slate-500">High Resolution (JPG)</p>
                            </div>
                            <button disabled className="px-4 py-2 bg-slate-200 text-slate-500 rounded text-sm cursor-not-allowed">Download</button>
                        </div>
                        <div className="p-6 bg-slate-100 rounded-lg flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-slate-800">Logo Pack</h3>
                                <p className="text-sm text-slate-500">Unspoken Truths (SVG/PNG)</p>
                            </div>
                            <button disabled className="px-4 py-2 bg-slate-200 text-slate-500 rounded text-sm cursor-not-allowed">Download</button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-200">
                <h2 className="text-2xl font-medium text-slate-dark mb-8">Contact for Bookings</h2>
                <p className="text-slate-600 mb-6">
                    For all press and booking inquiries, please contact:
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-slate-dark text-sand-light px-8 py-3 rounded-md hover:bg-slate-700 transition-colors"
                >
                    Go to Contact Page
                </a>
            </div>
        </div>
    );
}
