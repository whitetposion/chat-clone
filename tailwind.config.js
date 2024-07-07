/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // Extra Small devices
        'sm': '640px',    // Small devices
        'md': '768px',    // Medium devices
        'break': "920px",
        'lg': '1024px',   // Large devices
        'xl': '1280px',   // Extra Large devices
        '2xl': '1536px',  // 2X Large devices
      },
    },
  },
  plugins: [],
}