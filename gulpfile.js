'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');

  swPrecache.write(path.join('sw.js'), {
    staticFileGlobs: [
      '**.**',
      'css/**.css',
      'js/**.js',
      'fonts/**/**.*'
    ]
  }, callback);
});
