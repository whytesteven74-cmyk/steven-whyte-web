
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Phase 6: Figma Nature-Inspired Palette
                'emerald': {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857', // Primary accent from Figma
                    800: '#065f46',
                    900: '#064e3b',
                    DEFAULT: '#047857',
                },
                'mint': {
                    50: '#f0fdf9',
                    100: '#ccfbef',
                    200: '#99f6e0',
                    bg: '#F0F9F6', // Main background from Figma
                    DEFAULT: '#F0F9F6',
                },
                'charcoal': {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    DEFAULT: '#334155', // Text color from Figma
                },
                // Keep some legacy for compatibility
                'clay': '#b38b6d',
                'glass-white': 'rgba(255, 255, 255, 0.8)',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem', // Large rounded cards from Figma
            },
            boxShadow: {
                'soft': '0 4px 20px -1px rgba(0, 0, 0, 0.05), 0 2px 10px -1px rgba(0, 0, 0, 0.03)',
                'card': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #F0F9F6 0%, #ecfdf5 50%, #d1fae5 100%)',
                'mint-gradient': 'linear-gradient(180deg, #F0F9F6 0%, #ffffff 100%)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
