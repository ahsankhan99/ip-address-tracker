/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-pattern-bg': "url('/images/pattern-bg-desktop.png')",
        'mobile-pattern-bg': "url('/images/pattern-bg-mobile.png')",
      },
      colors: {
        'primary': 'hsl(0, 0%, 17%)',
        'secondary': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}