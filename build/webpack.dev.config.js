// const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  hot: true,
  devtool: 'cheap-module-eval-source-map',
  // plugins: [
    // 开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
    // new webpack.HotModuleReplacementPlugin() 
  // ],
  devServer: {
    hot: true,
    // 以下为默认配置
    // contentBase: path.resolve(__dirname, "../dist"),
    // host: "localhost",
    port: 3000,
    historyApiFallback: true,
    proxy: {}
  }
})