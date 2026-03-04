/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B",
        secondary: "#F59E0B",
        dark: "#151022",
        light: "#fff7ed"
      },
      fontFamily: {
        display: ["Urbanist", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lgx: '992px',   // 👈 NEW BREAKPOINT
      lg: '1024px',
      xl: '1280px',
    },
   
  },
  plugins: [],
};

