/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    content: [
        "./popup.html",
        "./src/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}