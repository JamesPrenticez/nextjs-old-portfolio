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
      sm: ['.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
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
      backgroundImage: {
        'radial-gradient-blue': 'radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(56,189,248,1) 100%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}