"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { identity } from "@/data/identity";

const navLinks = [
    { href: "/story", label: "Story" },
    { href: "/archive", label: "Archive" },
    { href: "/contact", label: "Contact" },
];

export const NavBar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={(e) => {
                                if (pathname === "/") {
                                    e.preventDefault();
                                    scrollToTop();
                                }
                            }}
                            className="flex items-center gap-2 text-stone-700 hover:text-emerald-600 transition-colors"
                        >
                            <Heart className="w-5 h-5 text-emerald-600" />
                            <span className="font-serif italic tracking-wide text-lg">{identity.name}</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors font-sans text-sm tracking-widest uppercase ${pathname === link.href
                                        ? "text-emerald-600 font-bold"
                                        : "text-stone-600 hover:text-emerald-600"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-stone-600 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden mt-4 pb-4"
                            >
                                <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-emerald-50">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`py-2 transition-colors font-sans text-lg tracking-widest uppercase ${pathname === link.href
                                                ? "text-emerald-600 font-bold"
                                                : "text-stone-600 hover:text-emerald-600"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
};
