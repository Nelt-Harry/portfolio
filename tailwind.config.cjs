/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12131a',
        paper: '#f6f3ee',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0,0,0,.18)',
      },
    },
  },
  plugins: [],
}

