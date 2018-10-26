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
  },
  // workaround for https://github.com/zeit/next.js/issues/5429
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: [
        /\.git\//,
        /\.next\//,
        /node_modules/
      ]
    }
    return config
  }
})