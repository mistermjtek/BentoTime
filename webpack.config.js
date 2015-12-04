var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


/* Ignore node_modules
======================================================================= */
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


/* Default Configuration
======================================================================= */
var defaultConfig = {
  entry: {
    'react': path.resolve(__dirname, 'app/app.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'production.bundle.js'
  },
  plugins: [
    // Extracts our css and separates it from the javascript
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        sourceMap: true
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  webpackServer: {
    noInfo: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      components: path.resolve(__dirname, 'app/components'),
      stylesheets: path.resolve(__dirname, 'app/stylesheets'),
      modules: path.resolve(__dirname, 'app/modules')
    }
  }
};

if(process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}


/* Production Configuration
======================================================================= */
var productionConfig = Object.create(defaultConfig);


/* Development Configuration
======================================================================= */
var developmentConfig = Object.create(defaultConfig);


/* Test Configuration
======================================================================= */
var testConfig = Object.create(defaultConfig);


module.exports = {
  default: defaultConfig,
  test: testConfig,
  production: productionConfig,
  development: developmentConfig
};
