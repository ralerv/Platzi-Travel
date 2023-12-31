/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors:{
      "primary": "#CC2D4A",
      "secondary": "#8FA206",
      "tertiary": "#61AEC9",
      "white": "#ffffff",
      "gray-9":"#111827",
      "gray-8":"#1f2937",
      "gray-7":"#374151",
      "gray-3":"#d1d5db",
      "gray-5":"#6b7280",
      },
    fontFamily: { 
        Montserrat: ["Montserrat", "sans-serif"],
      },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/yosemite.jpg')",
			  'LA': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
			  'seattle': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
			  'new_york': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
			  'norway': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
			  'sydney': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sydney.jpg')",
			  'miami': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
			  'switzerland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
			  'bali': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
			  'chicago': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
			  'europe': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
			  'iceland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
      }
    },
  },
  plugins: [    require('tailwind-scrollbar-hide')
],
}

