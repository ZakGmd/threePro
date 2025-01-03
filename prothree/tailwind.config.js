import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'serif'],
        'inter': ['Inter','serif']
      },
      animation:{
        'fade': 'fade 0.4s ease forwards'
      },
      keyframes:{
        fade:{
          '0%': {transform: 'translateX(400px)', opacity: 0.4},
          '100%': {transform: 'translateX(0)', opacity: 1},
        }
      }
    },
  },
  plugins: [],
}