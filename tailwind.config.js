const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        dark: "#293241",
        lightblue: "#80CCFF",
        badge: "#F4EADE",        
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
