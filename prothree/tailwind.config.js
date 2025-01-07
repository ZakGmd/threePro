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
        'fadeIn': 'fadeIn 0.4s ease forwards' ,
        'fadeOut': 'fadeOut 0.4s ease forwards'
      },
      keyframes:{
        fadeIn:{
          '0%': {transform: 'translateX(400px)', opacity: 0.4},
          '100%': {transform: 'translateX(0)', opacity: 1},
        }, 
        fadeOut:{
          '0%': {transform: 'translateX(0)', opacity: 1},
          '100%': {transform: 'translateX(400px)', opacity: 0.4},
        }
      } ,
  
    
    },
  },
  plugins: [
  
  ],
}