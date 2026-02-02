/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { },
      fontFamily: {
        bellota: ["Bellota Text", "cursive"],
        besley: ["Besley", "serif"],
        tangerine: ["Tangerine", "cursive"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
