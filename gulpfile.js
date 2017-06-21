/*
Sandeep Vattapparambil
sandeepv68@gmail.com
*/
//Gulp Configuration
'use strict';
//require gulp module
var gulp   = require('gulp');

//set gulp task - default
gulp.task('default', ['generate-service-worker'], function() {});

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
