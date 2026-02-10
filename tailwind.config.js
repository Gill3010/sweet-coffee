/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#b86b5b', // tono cálido tipo café
          light: '#f3dfd6',
          dark: '#5b2f26',
        },
        accent: {
          dessert: '#e76f51',
          drinkCold: '#219ebc',
          drinkHot: '#b56576',
          food: '#588157',
        },
      },
      fontFamily: {
        display: ['system-ui', 'ui-rounded', 'ui-sans-serif'],
        body: ['system-ui', 'ui-sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 10px 25px rgba(15, 23, 42, 0.15)',
      },
      borderRadius: {
        card: '1.5rem',
      },
    },
  },
  plugins: [],
}

