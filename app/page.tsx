import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
            <h1 className="text-6xl font-serif text-desert-sand mb-4">Steven Whyte</h1>
            <p className="text-xl max-w-2xl mb-12 text-gray-300">
                Walking the path of truth, healing, and connection.
                From the roads of Europe to the silence of the desert.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                <Link href="/story" className="p-6 border border-gray-700 rounded-lg hover:border-desert-sand transition">
                    <h2 className="text-2xl font-bold mb-2">My Story &rarr;</h2>
                    <p className="text-gray-400">The long walk. The awakening. The mission.</p>
                </Link>
                <Link href="/unspoken" className="p-6 border border-gray-700 rounded-lg hover:border-desert-sand transition">
                    <h2 className="text-2xl font-bold mb-2">Unspoken &rarr;</h2>
                    <p className="text-gray-400">A platform for anonymous, emotional connection.</p>
                </Link>
                <Link href="/archive" className="p-6 border border-gray-700 rounded-lg hover:border-desert-sand transition">
                    <h2 className="text-2xl font-bold mb-2">Archive &rarr;</h2>
                    <p className="text-gray-400">Explore the library of thoughts and moments.</p>
                </Link>
                <Link href="/media-kit" className="p-6 border border-gray-700 rounded-lg hover:border-desert-sand transition">
                    <h2 className="text-2xl font-bold mb-2">Media &rarr;</h2>
                    <p className="text-gray-400">Press kit and contact.</p>
                </Link>
            </div>
        </main>
    );
}
