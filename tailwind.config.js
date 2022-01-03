module.exports = {
  mode: 'jit',
  content:  [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['"PT Serif"'],
      'sans': ['Lato'],
      'em': ['Pacifico']
    },
    extend: {
      backgroundImage: theme => ({
        /* background by SVGBackgrounds.com */
        'hero-pattern-light': "url('/images/wavey-fingerprint-light.svg')",
        'hero-pattern-dark': "url('/images/wavey-fingerprint-dark.svg')",        
      }),
      typography: theme => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            code: { color: theme('colors.gray.100') },
            'h1, h2, h3, h4': { color: theme('colors.gray.100') },
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800'),
            },            
          }
        }
      }),      
      gridAutoRows: {
        '100px': '100px'
      },
      colors: {
        action: '#f63'
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      typography: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
