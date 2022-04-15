const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  experimental: { outputFileTracing: true },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  webpack5: true,
  webpack: function (config, { dev, isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    // copy files you're interested in
    if (!dev) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from: 'fonts', to: 'fonts' }]
        })
      )
    }

    return config
  },
  env: {
    dxEnabled: process.env.DX_ENABLED
  },
}