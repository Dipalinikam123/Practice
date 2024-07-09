/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [],
  purge: ['./src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

