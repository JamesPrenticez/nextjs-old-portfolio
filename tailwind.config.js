module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xm: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      "2xl": ['1.5rem', '2rem'],
      "3xl": ['1.875rem', '2.25rem'],
      "4xl": ['2.25rem', '2.75rem'],
      "5xl": ['3rem', '3.5rem'],
      "6xl": ['3.75rem', '4.25rem'],
      "7xl": ['4.5rem', '5.2rem'],
    },
    backgroundImage: {
      'map': "url('../public/map.png')",
    },
    extend: {
      height:{
        screenNav: "calc(100vh - 4rem)",
      },
      fontFamily: {
        roboto: ['Roboto'],
       },
       gridTemplateRows: {
        // Default only goes upto 6
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}