/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      primary: '#f98866',
      secondary: '#74907A',
      white: '#FFFFFF',
      primaryshadow: '#F98866',
      background: '#fde0d7',
      backgroundSecondary: '#f3f3f3',
      TextSecondary: '#EAEAEA',
      Border: '#827070',
      SecondaryBorder: '#60a5fa',

    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Italic: ['Italiana', 'serif'],
      Rufina: ['Rufina', 'monospace']
    },
    extend: {},
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}