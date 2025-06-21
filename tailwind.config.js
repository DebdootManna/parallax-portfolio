/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['FiraCode Nerd Font', 'sans-serif'],
        body: ['FiraCode Nerd Font', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          light: '#FF6B6B',
          DEFAULT: '#FF5252',
          dark: '#FF4242',
        },
        secondary: {
          light: '#4ECDC4',
          DEFAULT: '#3ABDB3',
          dark: '#2AADA3',
        },
        accent: {
          light: '#FFE66D',
          DEFAULT: '#FFD700',
          dark: '#E6C200',
        },
        background: {
          light: '#F7F9FC',
          dark: '#121212',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        },
        text: {
          light: '#333333',
          dark: '#F5F5F5',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};