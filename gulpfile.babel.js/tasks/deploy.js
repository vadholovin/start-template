/**
 * @title Deploy
 * @description Publish contents to Github pages.
 */

// Dependencies
const { src } = require('gulp');
const ghPages = require('gulp-gh-pages');

// Config
const { paths } = require('../config');

// Task
function deploy() {
  return src(paths.deploy)
    .pipe(ghPages());
}

exports.deploy = deploy;
