/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        rebond: ['ESRebondGrotesque', 'sans-serif'],
      },
      colors: {
        brand: {
          "white": "#FFFFFF",
          'black': "#000000",
          "teal": "#0F282D",
          "lime": "#D1FF3B",
          "blue": "#7AF1FF",
          "purple": "#544AE5",
        },
      },

      screens: {
        'screen-square': {
          raw: "(min-aspect-ratio: 0.9/1) and (max-aspect-ratio: 1.1/1)"
        },
      }
    },
  },
  plugins: [],
};
