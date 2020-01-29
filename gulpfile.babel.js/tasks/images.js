/**
 * @title Images
 * @description A task to compress images.
 */

// Dependencies
const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const { isProd } = require('../util/env.js');

// Config
const { paths } = require('../config');

function images() {
  return src(paths.images.src)
    .pipe(changed(paths.copy.dest))
    .pipe(gulpif(isProd,
      imagemin([
        mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 3
        }),
        pngquant({
          quality: [0.65, 0.7],
          speed: 5
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: false,
            cleanupIDs: false,
          }]
        }),
      ], {
        verbose: true
      })
    ))
    // .pipe(changed(paths.assets.dest))
    .pipe(dest(paths.images.dest));
}

exports.images = images;
