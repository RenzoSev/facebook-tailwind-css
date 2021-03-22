module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        98: '26rem',
      },
      fontSize: {
        'fl': '1.6rem'
      },
      colors: {
        apple: {
          DEFAULT: '#42B72A',
          50: '#D8F5D2',
          100: '#C6F0BD',
          200: '#A2E694',
          300: '#7EDD6A',
          400: '#5AD341',
          500: '#42B72A',
          600: '#338E20',
          700: '#246417',
          800: '#153B0D',
          900: '#061104'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}