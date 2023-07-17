/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--Orange)",
        paleOrange: "var(--paleOrange)",
        darkBlue: "var(--DarkBlue)",
        grayishBlue: "var(--grayishBlue)",
        lightGrayishBlue: "var(--lightGrayishBlue)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
