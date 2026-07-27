/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arusuvai-bg': '#FAF7F2',
        'arusuvai-red': '#8B0000',
        'arusuvai-gold': '#D4AF37',
        'arusuvai-green': '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
