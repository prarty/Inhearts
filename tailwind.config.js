/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: 'rgb(255, 255, 255)',
        headerPurple: 'rgb(255, 255, 255)',
        backgroundPurple: 'rgb(255, 255, 255)',
        highLightPurple: 'rgb(255, 255, 255)',
        gradient1: '#FF6347', // Tomato
        gradient2: '#FFD700', // Gold
        gradient3: '#20B2AA', // Light Sea Green
        gradient4: '#9370DB', // Medium Purple
      },
    },
    fontFamily: {
      grad: ["Metal", 'serif'],
      sans: ["Roboto Condensed", 'sans-serif'],
      bod: ["Graduate", 'serif']
    },
  },
  plugins: [],
}