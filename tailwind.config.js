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
                "custom-black": "#202020",
                "custom-white": "#e3e3e3"
            }
        },
    },
    plugins: [],
}