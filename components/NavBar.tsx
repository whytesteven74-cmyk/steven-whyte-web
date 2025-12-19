
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Heart } from 'lucide-react';

const links = [
    { href: '/story', label: 'Story' },
    { href: '/archive', label: 'Archive' },
    { href: '/contact', label: 'Contact' },
];

export const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Desktop Navigation - Figma Style */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-[100] hidden md:block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                            <Heart className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="font-bold text-charcoal-800 text-lg">Steven Whyte</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative",
                                        isActive ? "text-emerald-700" : "text-charcoal-500 hover:text-charcoal-800"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Nav */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-[100] p-4 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-charcoal-100">
                <Link href="/" className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-charcoal-800">Steven Whyte</span>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal-700 p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-bold text-charcoal-700 hover:text-emerald-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </>
    );
};
