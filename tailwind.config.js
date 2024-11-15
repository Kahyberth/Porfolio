/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
      },
      colors: {
        mystic: {
          900: '#1a1a2e',
          800: '#232338',
        },
        enchanted: {
          500: '#9f7aea',
          600: '#805ad5',
        },
      },
    },
  },
  plugins: [],
}