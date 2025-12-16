import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Steven Whyte | Storyteller",
    description: "The journey of Steven Whyte. Connection, Truth, Healing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
            <body className="bg-soft-black text-white min-h-screen antialiased font-sans overflow-x-hidden selection:bg-desert-sand selection:text-soft-black">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
