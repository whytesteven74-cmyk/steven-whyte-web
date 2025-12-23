"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Heart, ArrowUpRight } from "lucide-react";

// ============================================
// TYPE DEFINITIONS
// ============================================

interface NavLink {
    href: string;
    label: string;
    external?: boolean;
}

// ============================================
// NAVIGATION DATA
// ============================================

const navLinks: NavLink[] = [
    { href: "/story", label: "My Story" },
    { href: "/archive", label: "Archive" },
    { href: "/unspoken", label: "Platform" },
    { href: "/contact", label: "Contact" },
];

// ============================================
// NAVBAR COMPONENT
// ============================================

export const NavBar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Desktop Navigation */}
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] hidden md:block transition-all duration-300",
                    scrolled ? "py-3" : "py-5"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav
                    className={cn(
                        "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 rounded-2xl",
                        scrolled && "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3 mx-6"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                            <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 leading-tight">Steven Whyte</span>
                            <span className="text-xs text-gray-500 leading-tight">Mental Health Advocate</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                        isActive
                                            ? "text-emerald-600"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 bg-emerald-50 rounded-lg -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {link.external && <ArrowUpRight className="w-3 h-3 ml-1 inline-block" />}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                    >
                        Get in Touch
                    </Link>
                </nav>
            </motion.header>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-[100]">
                <div
                    className={cn(
                        "flex items-center justify-between px-4 py-4 transition-all duration-300",
                        scrolled || isOpen ? "bg-white/90 backdrop-blur-xl shadow-lg" : ""
                    )}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Heart className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900">Steven Whyte</span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 top-[72px] bg-white z-50 px-6 py-8"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "block px-4 py-4 text-lg font-medium rounded-xl transition-colors",
                                                pathname === link.href
                                                    ? "bg-emerald-50 text-emerald-600"
                                                    : "text-gray-700 hover:bg-gray-50"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                className="mt-8 pt-8 border-t border-gray-100"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-center py-4 rounded-xl text-lg font-semibold shadow-lg shadow-emerald-500/30"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
