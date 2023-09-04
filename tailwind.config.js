/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'laptop' : '95vw',
        'tablet' : '90vw',
        'maxw' : '1170px',
      },
      maxWidth: {
        'maxw' : '1170px',
        'max-text' : '45rem'
      },
      height: {
        'image' : '500px',
      },
      minHeight: {
        'minh' : 'calc(80vh - 10rem)',
        'path' : '20vh',
      },
      fontSize : {
        '2' : ['2rem', {
          lineHeight : '1',
          letterSpacing: '0.1rem',
          fontWeight: '700'
        }],
        '2.5' : ['2.5rem', {
          lineHeight : '1',
          letterSpacing: '0.1rem',
          fontWeight: '700'
        }]
      },
      margin : {
        'footer' : '0.1rem'
      },
      colors:{
        'custom-text': '#eaded7',
      }
    },
    
    screens: {
      'nest-hub': '1025px',
      'tablet': '913px',
      'ipad-mini': '769px',
      'surface-duo': '541px',
      'iphone': '415px',
      'galaxy': '361px' 
    }
  },
  plugins: [],
}

