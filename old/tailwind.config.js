module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '2rem'],
      base: ['1rem', '2.5rem'],
      normal: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      "2xl": ['2rem', '2rem'],
      "3xl": ['3rem', '3.25rem'],
      "4xl": ['4rem', '4.25rem'],
      "5xl": ['5rem', '5.25rem'],
      "6xl": ['6rem', '6.25rem'],
      "7xl": ['7rem', '7.25rem'],
      "8xl": ['8rem', '8.25rem'],
    },
    extend: {
      fontFamily: {
        sharpGrotesk: ['sharp grotesk'],
        roboto: ['Roboto'],
      },
      minHeight:{
        screenNav: "calc(100vh - 3.5rem)", // (nav 4rm) + (footer 4rem) + (main margin top/bottom 2rem)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}