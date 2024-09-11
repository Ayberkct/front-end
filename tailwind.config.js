/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgb(234, 38, 120)", // Renk adını 'custom-purple' olarak belirledik
      },
    },
  },
  plugins: [],
};
