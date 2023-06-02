/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  darkMode: 'class',
  plugins: [forms, require('preline/plugin')],
};
