const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      sidebar: {
        light: "#80CCFF" ,
        dark: "#293241"
      },
    }, 
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
