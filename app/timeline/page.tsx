export default function TimelinePage() {
    const events = [
        { year: "2018", title: "The Departure", desc: "Left the corporate world. Started walking." },
        { year: "2019", title: "Europe", desc: "Crossed the continent on foot. 4,000km of silence." },
        { year: "2020", title: "The Desert", desc: "Egypt. Finding God in the sand." },
        { year: "2023", title: "Unspoken", desc: "The vision for a new way to connect." },
    ];

    return (
        <main className="min-h-screen p-8 bg-neutral-950 text-gray-200">
            <h1 className="text-4xl sr-only">Timeline</h1>
            <div className="max-w-4xl mx-auto border-l-2 border-desert-sand pl-8 space-y-16 py-12">
                {events.map((e, i) => (
                    <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-desert-sand rounded-full border-4 border-black" />
                        <span className="text-desert-sand font-mono text-sm">{e.year}</span>
                        <h2 className="text-2xl font-bold mt-1 mb-2">{e.title}</h2>
                        <p className="text-gray-400">{e.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
