/** @type {import('tailwindcss').Config} */
export default {
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
        secondary: "#98effa",
        // secondary: "#d9f9ff",
        secondarylight: "#dbf9ff",
        secondaryText: "#ff014f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
