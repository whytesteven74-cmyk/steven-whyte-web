import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

import { NavBar } from "@/components/NavBar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AuraCursor } from "@/components/ui/AuraCursor";
import { Preloader } from "@/components/ui/Preloader";

export const metadata: Metadata = {
    title: "Steven Whyte | Wellness & Unspoken Truths",
    description: "The journey of Steven Whyte. Connection, Truth, Healing through mental and physical wellbeing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} scroll-smooth`}>
            <body className="bg-stone-50 text-emerald-950 min-h-screen antialiased font-sans overflow-x-hidden selection:bg-emerald-900 selection:text-emerald-50 transition-colors duration-500">
                <Preloader />
                <SmoothScroll>
                    <AuraCursor />
                    <NavBar />
                    {children}
                    <ThemeToggle />
                </SmoothScroll>
            </body>
        </html>
    );
}
