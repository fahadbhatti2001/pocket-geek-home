/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", 
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#0070B9',
          2: '#CBE1F1',
          3: '#8D34FF',
          4: '#EEEEEE',
          
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
