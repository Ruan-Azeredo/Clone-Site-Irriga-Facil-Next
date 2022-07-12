/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verdeEscuro: '#297A4F',
        verdeMenosEscuro: '#4D9F34',
        azul: '#04556B'
      },
    },
  },
  plugins: [],
}
