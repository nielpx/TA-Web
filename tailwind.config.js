/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,png}"],
  theme: {
    extend: {
      backgroundImage:{
        'Splash': "url('./pictures/SplashScreen.png')",
      },
      fontFamily: {
        'Ubuntu' : [ "Ubuntu", "sans-serif"],
      },
      colors: {
        'milk-blue' : '#e9f4fc',
        'strong-blue': '#426DEB',
        'hover-blue': '#97A0F2',
        'light-green': '#06D001',
        'bright-red' : '#FF0000',
        'nice-purple': '#AF47D2',
        'gray' : '#CDDDEA',
        'font-gray' : '#939191'
      },
    },
  },
  plugins: [],
}

