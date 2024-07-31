/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pearl': '#E2D4BA',
        'raisin-black' :'#242325',
        'nyanza' : '#EAF9D9',
        'coquelicot': '#21211C',
        'bruns' : '#F0AC0E',
      },
      screens: {
        'xs': '698px',
      },
    },
  },
  plugins: [],
}