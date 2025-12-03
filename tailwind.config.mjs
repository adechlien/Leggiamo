/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Boulevard
        leg1: "#B9D2BE",
        leg2: "#A6D2B8",
        leg3: "#8FC6A5",
        leg4: "#263A31",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        "ubuntu-c": ["Ubuntu Condensed", "sans-serif"],
        unif: ["UnifrakturMaguntia", "serif"],
        merriweather: ["Merriweather", "serif"],
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
