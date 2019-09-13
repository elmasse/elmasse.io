const { withNextein} = require('nextein/config')
const { ContextReplacementPlugin } = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = withNextein({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown'
      },
      {
        name: '@geut/nextein-plugin-title-chicago-style',
        options: {          
          special: [
            'elmasse', 
            'npm',
            'cmd-plus',
            'elmasse-bundle',
            'Ext.ux.Cover',
            'Ext.i18n.Bundle',
            'GithubPages',
            'ES7', 'ES6', 'JWT', 'ExtJS'
          ]
        }
      }
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static',
      //   analyzerPort: 8888,
      //   openAnalyzer: false,
      //   generateStatsFile: true
      // }),
      new ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /en/
      )      
    )

    return config
  }
})
