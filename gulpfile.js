'use strict';
var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var eslint = require('gulp-eslint');
var term = require('terminal-kit').terminal;

var config = require('./webpack.config.js');

var build = function(done) {
  return function(error, stats) {
    if(error) { return console.log('Error', error); }
    console.log(stats.toString({colors: true}));
    if(done){ done(); }
  };
};

gulp.task('lint', function() {
  return gulp.src(['app/**/*.js', 'app/**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.results(function(results) {
      term.bold('Linting Results:\n');
      term.green('Files: ' + results.length + '\n');
      term.yellow('Warnings: ' + results.warningCount + '\n');
      term.red('Errors: ' + results.errorCount + '\n');
    }));
});

gulp.task('build', function(done) {
  webpack(config.default).run(build(done));
});

gulp.task('watch', function() {
  webpack(config.default).watch(100, build());
});
