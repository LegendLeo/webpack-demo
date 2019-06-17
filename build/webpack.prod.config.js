const path = require('path')
const merge = require('webpack-merge')
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const OptimizeCSS = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  // css tree-shaking配置
  plugins: [
    new PurifyCSS({
      paths: glob.sync([
        path.resolve(__dirname, '../*.html'),
        path.resolve(__dirname, '../src/*.js'),
        path.resolve(__dirname, '../src/**/*.jsx')
      ])
    }),
    new OptimizeCSS({})
  ]
})