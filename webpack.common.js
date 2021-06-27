const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  module: {
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['index', 'vendor', 'common']  // 考虑代码分割
    }),
  ]

}