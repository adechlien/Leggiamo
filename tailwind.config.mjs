/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        "ubuntu-c": ["Ubuntu Condensed", "sans-serif"],
        bellota: ["Bellota Text", "cursive"],
        besley: ["Besley", "serif"],
        tangerine: ["Tangerine", "cursive"],
        bebas: ["Bebas Neue", "cursive"],
        staatliches: ["Staatliches", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
