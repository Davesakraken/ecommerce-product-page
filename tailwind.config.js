/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        orange: {
          default: "var(--orange)",
          pale: "var(--paleOrange)",
        },
        blue: {
          light: "var(--lightGrayishBlue)",
          grayish: "var(--grayishBlue)",
          dark: "var(--darkGrayishBlue)",
          veryDark: "var(--veryDarkBlue)",
        },
        transparentBlack: "var(--transparentBlack)",
      },
      animation: {
        wiggle: "wiggle 500ms ease-in-out 100ms",
        fadeIn: "fadeIn 100ms ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "100" } },
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
    },
  },
  plugins: [],
};
