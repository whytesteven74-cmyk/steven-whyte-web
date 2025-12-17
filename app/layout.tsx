import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/ui/Interactions";

export const metadata: Metadata = {
    title: "Steven Whyte | Unspoken Truths",
    description: "The journey of Steven Whyte. Connection, Truth, Healing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
            <body className="bg-soft-black text-white min-h-screen antialiased font-sans overflow-x-hidden selection:bg-desert-sand selection:text-soft-black">
                <SmoothScroll>
                    <CursorGlow />
                    <NavBar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
