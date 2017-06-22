/*
Sandeep Vattapparambil
sandeepv68@gmail.com
*/
//Gulp Configuration
'use strict';
//require gulp module
var gulp = require('gulp');
var connect = require('gulp-connect');

//set webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

//set gulp task generate-service-worker
gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  swPrecache.write(path.join('sw.js'), {
    staticFileGlobs: [
      '**.**',
      'css/**.css',
      'js/**.js',
      'fonts/**.*',
      'fonts/**/**.*',
      'images/**.*'
    ]
  }, callback);
});

//watcher
gulp.task('watch', function() {
  gulp.watch([
    '*.html',
    'css/**.css',
    'js/**.js',
    'images/**.*',
    'fonts/**.*',
    'fonts/**/**.*'
  ], ['generate-service-worker']);
});

//set gulp task - default
gulp.task('default', ['generate-service-worker', 'webserver', 'watch'], function() {});
