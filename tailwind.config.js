/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondito': "url('/imgs/fondo.jpg')"
      },
      colors: {
        'c1': '#ff7209',
        'c2': '#ff930a',
        'c3': '#ff9429',
        'c4': '#fec208',
        'c5': 'rgb(229, 229, 229)',
        'c6': 'rgb(190, 190, 190)',
        'c7': 'rgb(160, 160, 160)',
        
      }
    },

  plugins: [],
}
}