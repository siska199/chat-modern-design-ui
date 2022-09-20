/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
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

        cl900: "#831843",
        cl800: "#db2777",
        cl700: "#ec4899",
        cl600: "#f472b6",
      },
    },
  },
  plugins: [],
};
