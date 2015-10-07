var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {};

config.production = {
  entry: {
    'react': path.resolve(__dirname, 'app/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'production.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMap: true}
    ]
  },
  node: {
    fs: 'empty'
  },
  webpackServer: {
    noInfo: true
  }
};

if(process.env.NODE_ENV !== 'production') {
  config.production.devtool = 'source-map';
  config.production.debug = true;
}

module.exports = config;
