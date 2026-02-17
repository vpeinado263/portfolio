/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Usará ThemeContext
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Extender estilos personalizados
      colors: {
        primary: "#3b82f6", // Mi Color principal
        secondary: "#10b981",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
