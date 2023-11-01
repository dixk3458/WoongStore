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
      backgroundImage: {
        firstBanner: `url('../public/images/banner1.png')`,
        secondBanner: `url('../public/images/banner2.png')`,
        thirdBanner: `url('../public/images/banner3.png')`,
        menuBanner: `url('../public/images/menu.png')`,
      },
    },
  },
  plugins: [],
};
