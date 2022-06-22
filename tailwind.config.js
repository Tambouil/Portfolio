/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "547px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
    },

    extend: {
      colors: {
        // Light colors
        "primary-light": "#FFFEFF",
        "secondary-light": "#272343",
        "ternary-light": "#e05e5e",

        // Dark colors
        "nav-navy": "#09192f",
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "lightest-navy-disabled": "#384965",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#102D44",

        // Extended v3 color
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
