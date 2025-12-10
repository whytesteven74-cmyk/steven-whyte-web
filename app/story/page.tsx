export default function StoryPage() {
    return (
        <main className="min-h-screen p-8 md:p-24 bg-soft-black text-gray-100">
            <div className="max-w-3xl mx-auto space-y-12">
                <header>
                    <h1 className="text-5xl font-serif text-desert-sand mb-4">The Story</h1>
                    <p className="text-xl italic text-gray-400">From the noise of the world to the truth of silence.</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-clay">The Walk</h2>
                    <p className="leading-relaxed text-lg">
                        It started with a backpack and a question. I walked across Europe, Turkey, and into Egypt.
                        Step by step, shedding the layers of who I was supposed to be, to find who I actually was.
                    </p>
                    <p className="leading-relaxed text-lg">
                        There were days of hunger, days of sublime beauty, and days where the only conversation
                        was with the wind. In that silence, I found the connection we all crave.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-clay">The Awakening</h2>
                    <p className="leading-relaxed text-lg">
                        We are more than our jobs, our traumas, and our social media profiles.
                        We are a collective consciousness, momentarily forgetting itself.
                        My mission now is to help others remember.
                    </p>
                </section>
            </div>
        </main>
    );
}
