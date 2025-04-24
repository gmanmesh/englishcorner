/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {



      colors: {
        primary: "#2e278c",
        light: "#8C8CC2",
        background: "#ACACE596",
        message: "#0A0500B5"
      },
      screens: {
        '4xs': '180px',
        '3xs': '300px',
        '2xs': '350px',
        '1xs': '400px',
        'xs': '480px',
        'dashboard': '800px',
      },
      boxShadow: {
        'nav': '0px 0px 6px 6px rgba(0, 0, 0, 0.1)',
        'hero': '0px 0px 3px 4px rgba(0, 0, 0, 0.1)',
        'card': '0px 0px 16px 2px rgba(0, 0, 0, 0.1)',
        'shadow': '0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
        'small': '0px 0px 2px 1px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        yohannes: ['Ubuntu', 'serif'],

      },
      backgroundImage: {
        'primaryBtn': 'linear-gradient(to top right, #1e3a8a, #93c5fd)',
        'lightBtn': 'linear-gradient(to top right, #60a5fa, #bfdbfe)'
      }
    },
  },
  plugins: [],
}

