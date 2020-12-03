const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: 'src/public', to: 'public' }
      ]
    })
  ]
}