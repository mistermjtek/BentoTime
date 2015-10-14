'use strict';
var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config.js');

var build = function(done) {
  return function(error, stats) {
    if(error) { return console.log('Error', error); }
    console.log(stats.toString({colors: true}));
    if(done){ done(); }
  };
};

gulp.task('build', function(done) {
  webpack(config.production).run(build(done));
});

gulp.task('watch', function() {
  webpack(config.production).watch(100, build());
});
