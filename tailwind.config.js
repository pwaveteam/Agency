/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        screens: {
          'max-md': { 'max': '767px' },
          'max-sm': { 'max': '639px' },
        },
        colors: {
          background: '#ffffff',
          foreground: '#111111',
          border: '#E6EAF0',
          ring: '#1C56D3',
        },
      },
    },
    plugins: [],
  }
  