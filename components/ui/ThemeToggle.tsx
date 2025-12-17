
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.classList.contains('dark');
        setIsDark(initialColorValue);
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.remove('dark');
            document.body.classList.remove('dark');
            setIsDark(false);
        } else {
            root.classList.add('dark');
            document.body.classList.add('dark');
            setIsDark(true);
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-soft flex items-center justify-center border border-clay/10 dark:border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            {isDark ? (
                <Sun className="w-6 h-6 text-clay" />
            ) : (
                <Moon className="w-6 h-6 text-clay" />
            )}
            <span className="sr-only">Toggle Reading Mode</span>
        </motion.button>
    );
};
