/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      'black-100': '#111111',
      'black-200': '#757575',
      'gray-100': '#f5f5f5',
      'gray-200': '#e5e5e5',
      'gray-300': '#7e7e7e'
    },
    extend: {},
  },
  plugins: [],
}