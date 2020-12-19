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
        shadowlight: "#c0c9d8",           
        orange: "#ff9500"
      }
    }, 
    ringColor: {     
      lightblue: "#80CCFF"
    },
    borderColor: {
      orange: "#ff9500"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
