var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'app.bundle.js',
    filename: '[name].bundle.js',
    // publicPath: '/dist'
  },
  // watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  // devServer: {
  //   inline: true,
  //   hot: true,
  //   contentBase: './dist'
  // }
};