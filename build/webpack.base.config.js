const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // entry: {
  //   main: [
  //     './src/index.js'
  //   ],
  // }, // webpack4默认入口为./src/index.js
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
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
        include: [path.resolve(__dirname, '../src')],
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 每次构建前清理dist文件夹
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.html'), // 指定模板路径
      filename: 'index.html',
      title: 'webpack-react',
      minify: {
        // 压缩 HTML 的配置
        collapseWhitespace: true, // 去除HTML中的空白
        minifyCSS: true, // 压缩HTML中出现的CSS代码
        minifyJS: true // 压缩HTML中出现的JS代码
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: false
}
