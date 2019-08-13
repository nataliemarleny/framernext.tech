const withSass = require('@zeit/next-sass')
const withReactSvg = require('next-react-svg')
const path = require('path')
module.exports = withReactSvg(withSass({
  include: path.join(__dirname, 'svg'),
  experimental: {
    modern: true,
    granularChunks: true
  }
}))
