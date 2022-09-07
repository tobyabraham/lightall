const webpack = require('webpack');
var HtmlWebpackPlugin =  require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output : {
    path : './dist',
    filename : 'app.bundle.js'
  },
  plugins : [
    new ExtractTextWebpackPlugin('app.bundle.css')],
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test : /\.css$/,
        use : ExtractTextWebpackPlugin.extract({
          fallback : 'style-loader',
          use: 'css-loader'
        })
      },{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      },{
        test : /\.jpg$/,
        exclude: /(node_modules)/,
        loader : 'file-loader'
      }
    ],
  },
  //...
};