module.exports = {
  // mode: 'jit',
  purge:  [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['"PT Serif"'],
      'sans': ['Lato']
    },
    extend: {
      backgroundImage: theme => ({
        /* background by SVGBackgrounds.com */
        'hero-pattern-light': "url('/images/wavey-fingerprint-light.svg')",
        'hero-pattern-dark': "url('/images/wavey-fingerprint-dark.svg')",        
      }),
      gridAutoRows: {
        '100px': '100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
