import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import process from 'process';

let app = express();
let env = process.env.NODE_ENV || 'dev';
let port = process.env.NODE_PORT || 9000;
let webpackConfig;

if(env === 'dev'){
  webpackConfig = require('../webpack/webpack.dev.babel.js');
}else if(env === 'prod'){
  webpackConfig = require('../webpack/webpack.prod.babel.js');
}

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath
}));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'app','404.html'));// load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, function () {
  console.log('App listening on port ' + port + "!");
});

module.exports = app;
