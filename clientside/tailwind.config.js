/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'orange': '#ED5221',
      'gray-dark': '#1C1E25',
      'gray': '#666565',
      'white': '#FFFFFF',
      'red': '#FF0000',
      'black': '#000000',
      'transparent': 'transparent',
      'blue': '#0000FF'
    }



  },
  plugins: [],
}