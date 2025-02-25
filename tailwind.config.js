/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#ff0033',
          blue: '#00ffff',
          yellow: '#ffff00',
        },
        urban: {
          dark: '#121212',
          light: '#f5f5f5',
          gray: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'text-slide': 'text-slide 12s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};