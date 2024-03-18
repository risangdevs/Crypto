/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/*.{jsx,js}",'./src/**/*.{jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}