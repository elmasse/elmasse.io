const { withNextein} = require('nextein/config')

module.exports = withNextein({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown',
        options: {
          position: true,
          rehype: ['rehype-slug', 'rehype-autolink-headings', '@mapbox/rehype-prism']
        }
      },
      {
        name: 'nextein-plugin-reading-time',
      },
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
            'ES7', 'ES6', 'JWT', 'ExtJS'
          ]
        }
      }
    ]
  }
})
