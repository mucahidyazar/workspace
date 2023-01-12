const withPlugins = require('next-compose-plugins')
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withSass = require('@zeit/next-sass')
const localeSubpaths = {}

const nextConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}

module.exports = withPlugins([[withSass, { cssModules: true }]], nextConfig)
