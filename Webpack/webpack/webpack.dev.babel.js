import merge from 'webpack-merge';
import common from '../webpack.common.babel.js';

module.exports = merge(common, function(){
  let config = {};
  config.devtool = 'inline-source-map';
  return config;
}());
