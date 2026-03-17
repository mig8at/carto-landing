/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#131313',
                card: '#1c1c1c',
                primary: {
                    DEFAULT: '#f2e9d2',
                    foreground: '#131313',
                },
                border: 'rgba(255,255,255,0.07)',
            },
            fontFamily: {
                // Matches the app exactly
                sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
                serif: ['Bricolage Grotesque', 'ui-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace'],
            },
        },
    },
    plugins: [],
}