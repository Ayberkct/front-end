/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgb(234, 38, 120)",
        customGray: "rgb(244,244,244)",
        customBlue: "rgb(221, 238, 254)",
        customGreen: "rgb(217, 246, 241)",
        customBlueText: "rgb(23, 104, 255)",
        customGreenText: "rgb(0, 118, 181)",
        customGrayBg: "rgb(72, 65, 72)",
        customDarkGray: "rgb(42, 38, 43)",
      },
    },
  },
  plugins: [],
};
