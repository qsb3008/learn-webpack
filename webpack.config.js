const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}