/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "main-1": "#3C886E",
            },
            backgroundImage: {
                "hero-pattern": "url('./assets/images/image-7.avif')",
            },
        },
    },
    plugins: [],
}
