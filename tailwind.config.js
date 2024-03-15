/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor:{
        main:"#ea1d5d",
        dark:"#222"
      },
      colors:{
        main:"#ea1d5d",
        dark:"#eee"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
