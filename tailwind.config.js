/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js}",
      './src/Components/**/*.{html,jsx}', // added comma here
      './src/Pages/**/*.{html,jsx}' // removed comma here
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // darkMode: 'class',
  }