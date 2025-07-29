/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001f42', // Dark blue
          light: '#1a3a5a',
          dark: '#001529',
        },
        secondary: {
          DEFAULT: '#400f14', // Dark red
          light: '#5a1a1f',
          dark: '#2a0a0e',
        },
        accent: {
          DEFAULT: '#818e9b', // Gray
          light: '#9ba5b0',
          dark: '#6a737d',
        },
        warm: {
          DEFAULT: '#6e3f37', // Brown
          light: '#8a5a52',
          dark: '#5a332c',
        },
      },
    },
  },
  plugins: [],
} 