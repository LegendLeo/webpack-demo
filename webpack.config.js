const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // entry: {
  //   main: [
  //     './src/index.js'
  //   ],
  // },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              limit: 8 * 1024
            }
          }
        ]
      },
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'webpack learning',
      template: './src/index.html',
      hash: true,
      minify: { // 压缩 HTML 的配置
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true // 压缩 HTML 中出现的 JS 代码
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.ProvidePlugin({
      '_': 'lodash'
    }),
    new CleanWebpackPlugin() // 每次构建前清理dist文件夹
  ],
  optimization: {
    splitChunks: {
      // cacheGroups: {
      //   tools: {
      //     chunks: 'initial',
      //     test: 'tools',
      //     name: 'tools',
      //     enforce: true
      //   }
      // }
      chunks: 'all'
    }
  },
  performance: false
}