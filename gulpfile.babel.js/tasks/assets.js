/**
 * @title Assets
 * @description A task to copy assets (fonts).
 */

// Dependencies
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const errorHandler = require('../util/errorHandler.js');

// Config
const { paths } = require('../config');

function assets() {
  return src(paths.assets.src)
    .pipe(plumber({errorHandler}))
    .pipe(changed(paths.assets.dest))
    .pipe(dest(paths.assets.dest));
}

exports.assets = assets;
