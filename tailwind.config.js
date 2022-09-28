/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        contactInfo: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        contactInfo: "contactInfo 0.5s ease-in-out",
      },
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      colors: {
        cd900: "#000000",
        cd800: "#212121",
        cd700: "#303030",
        cd600: "#424242",
        cd500: "#9ca3af",
        main: "#60a5fa",

        cl900: "#831843",
        cl800: "#db2777",
        cl700: "#ec4899",
        cl600: "#f472b6",
      },
    },
  },
  plugins: [],
};
