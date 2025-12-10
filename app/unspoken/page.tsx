export default function UnspokenPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white p-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

            <div className="z-10 text-center max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tighter">unspoken</h1>

                <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                    <p>
                        In a world of noise, we have lost the art of connection.
                        Social media sells us engagement, not truth.
                    </p>
                    <p>
                        <strong className="text-blue-200">Unspoken</strong> is a sanctuary.
                        No profiles. No likes. No influencers.
                    </p>
                    <p>
                        Just you, me, and the raw human emotion that binds us.
                    </p>
                </div>

                <div className="mt-16">
                    <a href="https://unspoken-platform.vercel.app" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-opacity-90 transition">
                        Enter the Beta
                    </a>
                </div>
            </div>
        </main>
    );
}
