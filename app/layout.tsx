import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en">
            <body className={`${inter.className} bg-soft-black text-white min-h-screen`}>{children}</body>
        </html>
    );
}
