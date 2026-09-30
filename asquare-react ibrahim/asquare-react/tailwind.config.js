/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#103F2E",
        leaf: "#4F8A3B",
        gold: "#F6C744",
        cream: "#FBF7EA",
        ink: "#173A2D",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
