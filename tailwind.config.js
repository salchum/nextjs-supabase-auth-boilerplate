/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
const preline = require('preline/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  darkMode: 'media',
  plugins: [forms, preline],
};
