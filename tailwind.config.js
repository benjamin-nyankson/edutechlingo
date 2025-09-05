/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFE3E0",
          200: "#FFC1BA",
          300: "#FF998F",
          400: "#FF7E73",
          500: "#E55F53",
        },
        secondary: {
          100: "#1C2A38",
          200: "#16212E",
          300: "#101926",
          400: "#0C141D",
          500: "#080D14",
        },
        bgColor:"#eff6ff"
      },
    },
  },
  plugins: [],
};
