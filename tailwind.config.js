
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
                // New Pastel Wellness Palette
                'sage': {
                    50: '#f2f8f5',
                    100: '#e6f1ec',
                    200: '#cce3d9',
                    DEFAULT: '#e8f3ee', // Wellness Sage
                },
                'rose': {
                    50: '#fffafa',
                    100: '#fdf2f2',
                    DEFAULT: '#fdf2f2', // Dust Rose
                },
                'sand': {
                    50: '#fefcf9',
                    100: '#faf7f2',
                    DEFAULT: '#faf7f2', // Soft Sand
                },
                'slate-well': '#f0f4f8', // Soft Wellness Blue
                'slate-dark': '#2e3440',
                'slate-light': '#4c566a',

                // Legacy / Accent colors
                'desert-sand': '#eecfa1',
                'clay': '#b38b6d',
                'soft-black': '#121212',
                'glass-black': 'rgba(18, 18, 18, 0.7)',
                'glass-white': 'rgba(255, 255, 255, 0.6)',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            backgroundImage: {
                'noise': "url('/noise.png')",
                'wellness-gradient': 'linear-gradient(135deg, #fdf2f2 0%, #e8f3ee 100%)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
