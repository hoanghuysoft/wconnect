/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(98, 127, 255, 1)',
        'secondary': 'rgba(245, 254, 253, 1)',
        'text-primary': 'rgba(25, 41, 92, 1)',
        'text-secondary': 'rgba(153, 161, 190, 1)',
        'gray-light': '#f1f4f5',
        'gray-text': '#535767',
        'blue': '#1877F2',
      },
      borderRadius: {
        'sm': '24px',
        'md': '36px',
        'lg': '50px',
      },
    },
  },
  plugins: [],
}

