/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                card: '#111111',
                primary: '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Bricolage Grotesque', 'serif'],
            }
        },
    },
    plugins: [],
}