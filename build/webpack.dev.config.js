// const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // entry: [
  //   'react-hot-loader/patch'
  // ],
  // plugins: [
    // 开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
    // new webpack.HotModuleReplacementPlugin() 
  // ],
  devServer: {
    hot: true,
    inline: true,
    // 以下为默认配置
    // contentBase: path.resolve(__dirname, "../dist"),
    // host: "localhost",
    port: 8000,
    historyApiFallback: true,
    proxy: {}
  }
})