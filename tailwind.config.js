/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        lightBorder: '#E8EBFB',
        darkBorder: '#E9F1FE',

        lightBrand: '#E7C8B8',
        darkBrand: '#8EAFBA',
      },
    },
  },
  plugins: [],
};
