/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: '#f6f0e8',
          sand: '#e8dcc8',
          ink: '#1c1a17',
          muted: '#675e55',
          accent: '#b88a44',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        haze: '0 32px 70px -44px rgba(41, 33, 24, 0.48)',
      },
    },
  },
  plugins: [],
}
