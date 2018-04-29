const { default: config } = require('nextein/config')
const { ContextReplacementPlugin } = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = config({
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