const withPlugins = require('next-compose-plugins')
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const path = require('path')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

const localeSubpaths = {}

const nextConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}

module.exports = withPlugins(
  [
    [withSass, { cssModules: true }],
    {
      webpack(config) {
        config.resolve.alias['~'] = path.resolve(__dirname)
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000',
        })
        return config
      },
    },
  ],
  nextConfig
)
