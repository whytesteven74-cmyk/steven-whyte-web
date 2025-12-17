/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'desert-sand': '#eecfa1',
                'clay': '#b38b6d',
                'soft-black': '#121212', // Slightly darker for premium feel
                'slate-dark': '#2e3440',
                'slate-light': '#4c566a',
                'glass-black': 'rgba(18, 18, 18, 0.7)',
                'glass-white': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                serif: ['var(--font-playfair)', 'serif'], // Keeping Playfair for headers if needed, or removing
            },
            backgroundImage: {
                'noise': "url('/noise.png')", // Placeholder for texture if needed
                'sand-gradient': 'linear-gradient(to bottom right, #eecfa1, #b38b6d)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
