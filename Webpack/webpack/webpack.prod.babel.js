import merge from 'webpack-merge';
import common from '../webpack.common.babel.js';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

module.exports = merge(common, function(){
  let config = {};
  config.plugins = [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '..', 'app', '404.html')
    }]),
    new UglifyJSPlugin()
  ];
  return config;
}());
