/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'concert-one-regular': ["Concert One", "sans-serif"],
        'yanone-kaffeesatz': ["Yanone Kaffeesatz", "sans-serif"],
        'londrina-shadow': ['"Londrina Shadow"', 'sans-serif'],
        'matemasie': ['"Matemasie"', 'sans-serif'],
        'timotheos': ['"Timotheos"', 'sans-serif'],
        'ranchers': ['"Ranchers"', 'sans-serif'],

      },
      colors: {
        'green': '#6BA952', // Verde
        'fuchsia': '#C52560', // Fucsia
      },
      backgroundImage: {
        'fuchsia-gradient': 'linear-gradient(135deg, #C52560,rgb(226, 39, 107),rgb(180, 20, 79))',
        'custom-gradient': 'linear-gradient(135deg, #6BA952, #C52560)',
      },
      
    },
  },
  plugins: [ ],
}
