/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0fa9e6', light: '#3fbaeb', dark: '#0c87b8' },
        circa: 'rgb(var(--color-circa) / <alpha-value>)',
      },
      fontFamily: { headline: 'Poppins, sans-serif' },
    },
  },
  plugins: [],
};
