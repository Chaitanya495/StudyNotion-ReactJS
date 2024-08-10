/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'overallFont' : ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'pageBG' : '#000814',
        'buttonBG' : '#161d29',
        'signinBG' : '#ffd60a',
        'orline' : '#2c333f'
      },
      textColor: {
        'buttontext' : '#afb2bf',
        'text' : '#dbddea',
        'welcomeText': '#f1f2ff',
        'desc1Text' : '#afb2bf',
        'desc2Text' : '#47a5c5',
        'signinColor' : '#000814',
        'orColor' : '#2c333f',
      },
      borderColor:{
        'bordercolor' : '#afb2bf',
      },
      boxShadowColor : {
        'shadowcolor' : '#afb2bf',
      }
    },
  },
  plugins: [],
}

