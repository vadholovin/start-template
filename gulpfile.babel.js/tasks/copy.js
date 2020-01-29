/**
 * @title Copy
 * @description A task to copy .htaccess, favicons,
 * robots.txt to the output directory.
 */

// Dependencies
const { src, dest } = require('gulp');
const changed = require('gulp-changed');

// Config
const { paths } = require('../config');

// Task
function copy() {
  return src(paths.copy.src)
    .pipe(changed(paths.copy.dest))
    .pipe(dest(paths.copy.dest));
}

exports.copy = copy;
