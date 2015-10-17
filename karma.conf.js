require('core-js/es5');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS_without_security'],
    files: [
      'test/**/*.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'test/**/*.js': ['webpack']
    },
    reporters: ['progress'],
    singleRun: true,
    customLaunchers: {
      PhantomJS_without_security: {
        base: 'PhantomJS',
        flags: ['--web-security=no']
      }
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      resolve: {
        extensions: ['','.js','.jsx']
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
