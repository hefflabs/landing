/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "var(--primary)",
      black: "#0B0B0B",
      jet: "#333333",
      gray: "#6B6B6B",
      platinum: "#E3E3E3",
      white: "#FEFEFE",
      red: "#F65153",
      gold: "#FEB548",
      green: "#06C18C",
      blue: "#37B5E6",
      purple: "#9A7BCC",
      glass: "var(--glass)",
      "glass-hover": "var(--glass-hover)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      spacing: {
        100: "400px",
        162: "648px",
      },
    },
  },
  plugins: [],
};
