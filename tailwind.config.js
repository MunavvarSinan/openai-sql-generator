/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      spacemono: ['Space Mono', 'monospace'],
      presstart: ['Press Start 2P', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
