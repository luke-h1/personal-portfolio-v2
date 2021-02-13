module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './templates/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      sm: '80px',
      md: '100px',
    },
    minWidth: {
      sm: '500px',
      '1/4': '25%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};