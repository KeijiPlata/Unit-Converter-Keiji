/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bgcolor': '#1F2937',
        'purplee': '#6943FF',
        'boxcolor': '#273549',
        'fontColor': '#CCC1FF',
        'white': '#FFFFFF',
       
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
