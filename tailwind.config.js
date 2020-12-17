const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        sidebar_bg: "#293241",
        sidebar_text: "#80CCFF",
        main_bg: "#F4EADE",
        main_text: "#293241",
        orange: "#ff9500"
      }  
    }, 
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
