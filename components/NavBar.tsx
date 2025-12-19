
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './ui/Interactions';

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
                className="fixed top-8 left-0 right-0 z-[100] hidden md:flex justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="bg-glass-black backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-8">
                    <Magnetic distance={0.2}>
                        <Link href="/" className="font-mono text-lg font-bold tracking-tighter text-white hover:text-clay-light transition-colors flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-clay flex items-center justify-center text-white font-bold text-sm">S</div>
                            UNSPOKEN.
                        </Link>
                    </Magnetic>

                    <div className="flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Magnetic key={link.href} distance={0.1}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2 text-xs uppercase tracking-widest font-mono transition-colors hover:text-white",
                                            isActive ? "text-white" : "text-slate-400"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-clay/5 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.label}</span>
                                    </Link>
                                </Magnetic>
                            );
                        })}
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Nav */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-[100] p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="font-mono text-xl font-bold text-white">
                    UNSPOKEN.
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[90] bg-[#1a1a1a] flex flex-col items-center justify-center gap-8 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold font-mono text-slate-400 hover:text-clay uppercase tracking-tighter"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </>
    );
};
