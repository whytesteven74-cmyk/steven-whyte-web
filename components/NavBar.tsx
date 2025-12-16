
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Story' },
    { href: '/unspoken', label: 'Unspoken' },
    { href: '/archive', label: 'Archive' },
    { href: '/contact', label: 'Contact' },
];

export const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Desktop Floating Dock */}
            <motion.header
                className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="bg-glass-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-8">
                    <Link href="/" className="font-serif text-lg font-bold tracking-tighter text-desert-sand hover:text-white transition-colors">
                        SW.
                    </Link>

                    <div className="flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                                        isActive ? "text-white" : "text-gray-400"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Nav */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="font-serif text-xl font-bold text-desert-sand">
                    SW.
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-40 bg-soft-black flex flex-col items-center justify-center gap-8 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-gray-300 hover:text-desert-sand"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </>
    );
};
