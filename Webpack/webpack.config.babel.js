'use strict';

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from "webpack";

module.exports = function(){
  let config = {};
  config.entry = './app/app.js';
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  };
  config.devtool = 'inline-source-map';
  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'html-withimg-loader'
    }]
  };
  config.plugins = [
    new HtmlWebpackPlugin({template: './app/index.html'}),
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([{
      from: __dirname + '/app'
    }])
  ];
  config.devServer = {
    contentBase: './dist',
    stats: 'minimal'
  };
  return config;
}();
