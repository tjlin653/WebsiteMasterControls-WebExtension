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
        extend: {
            colors: {
                "dark-mode-text": "text-gray-200",
                "light-mode-text": "text-gray-800",
                "dark-btn-bg": "bg-gray-700",
                "light-btn-bg": "bg-gray-50"
            }
        },
    },
    plugins: [],
}