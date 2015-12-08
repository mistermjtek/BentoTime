var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    browsers: ['Chrome_without_security'],
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha'],
    singleRun: true,
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--web-security=no']
      }
    },
    webpack: webpackConfig.default,
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-sinon',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ]
  });
};
