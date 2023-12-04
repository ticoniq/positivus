/** @type {import('tailwindcss').Config} */
const daisyUI = require("daisyui");
// const elements = require("tw-elements/dist/plugin.cjs");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        newDark: 
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'custom': '1100px', // Add your custom max-width value here
      },
    },
  },
  plugins: [
    daisyUI,
    // elements,
  ],
}

