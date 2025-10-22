import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#848474",
          500: "#848474",
        },
        secondary: {
          default: "#303030",
          500: "#303030",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "cormorant-garamond": ["var(--font-cormorant-garamond)"],
      },
    },
  },
  plugins: [heroui()],
}

module.exports = config;