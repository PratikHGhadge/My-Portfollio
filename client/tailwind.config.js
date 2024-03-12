/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#212428",
        secondary: "#00e5d0",
        // secondary: "#98effa",
        // secondary: "#d9f9ff",
        secondarylight: "#00e5d0",
        secondaryText: "#ff014f",
        darkSecond: "#232323",
        // darkSecond: "#1F2833",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
