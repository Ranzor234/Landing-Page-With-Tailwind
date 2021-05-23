module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['Raleway'],
        'open-sans':['Open Sans']
      },
      backgroundImage: theme => ({
        'bg-sm' : "url('/images/bg-curve-mobile.svg')",
        'bg-md' : "url('/images/bg-curve-desktop.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
