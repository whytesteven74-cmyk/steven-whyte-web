import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CursorGlow } from "@/components/ui/Interactions";

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
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
            <body className="bg-sand-100 text-slate-900 min-h-screen antialiased font-sans overflow-x-hidden selection:bg-rose-200 selection:text-slate-900 transition-colors duration-500">
                <SmoothScroll>
                    <CursorGlow />
                    <NavBar />
                    {children}
                    <ThemeToggle />
                </SmoothScroll>
            </body>
        </html>
    );
}
