/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Example content paths...
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Graphik", "sans-serif"],
                serif: ["Merriweather", "serif"],
                origin: ["Montserrat", "italic"],
            },
        },
    },
    variants: {
        extend: {},
    },
    extend: {},
    plugins: [],
};
