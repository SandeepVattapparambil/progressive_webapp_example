/*
Sandeep Vattapparambil
sandeepv68@gmail.com
*/
//Gulp Configuration
'use strict';
//require gulp module
var gulp = require('gulp');
//require browser-sync module
var browserSync = require('browser-sync');
var reload = browserSync.reload;
//set gulp task - default
gulp.task('default', ['browser-sync'], function() {});
//set gulp task - browser-sync static server
gulp.task('browser-sync', ['generate-service-worker'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
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
      'fonts/**/**.*',
      'images/**.*'
    ]
  }, callback);
});
