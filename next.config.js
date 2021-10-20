const { withNextein } = require('nextein/config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withNextein(
  withBundleAnalyzer({
  webpack5: true,
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown',
        options: {
          rehype: ['rehype-slug', 'rehype-autolink-headings', '@mapbox/rehype-prism']
        }
      },
      'nextein-plugin-reading-time',
      {
        name: '@geut/nextein-plugin-title-chicago-style',
        options: {
          frontMatter: ['title', 'description'],
          special: [            
            'elmasse', 
            'npm',
            'CocktailJS',
            'cmd-plus',
            'elmasse-bundle',
            'Ext.ux.Cover',
            'Ext.i18n.Bundle',
            'ES7', 'ES6', 'JWT', 'ExtJS',
            'iPad', 'iOS',
            'tailwindcss'            
          ]
        }
      }
    ]
  }
}))
