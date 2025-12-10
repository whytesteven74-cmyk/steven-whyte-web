export default function ArchivePage() {
    return (
        <main className="min-h-screen p-8 bg-neutral-900 text-white">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-serif mb-4">The Archive</h1>
                <p className="text-gray-400">A library of moments, thoughts, and reflections.</p>
            </header>

            {/* Grid for content - connecting to Vercel integration later */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-[9/16] bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
                        <span className="text-gray-600">Loading Archive Item...</span>
                    </div>
                ))}
            </div>
        </main>
    );
}
