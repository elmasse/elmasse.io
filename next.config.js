const { default: config } = require('nextein/config')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')

module.exports = config({
  webpack: (config) => {
    config.plugins.push(
      new ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'json', 'markdown', 'bash', 'yaml', 'xml'].join('|')})$`)
      )
    )

    return config
  }
})