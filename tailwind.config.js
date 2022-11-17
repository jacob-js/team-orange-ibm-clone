/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4589ff",
        darkblue: "#0f62fe",
        secondary: "#161616",
        gray: "#6f6f6f",
        darkgray: "#8d8d8d",
        lightgray: "#393939",
      },
      fontFamily: {
        'ibm': "'ibm','Helvetica Neue',Arial,sans-serif"
      }
    },
  },
  plugins: [],
};
