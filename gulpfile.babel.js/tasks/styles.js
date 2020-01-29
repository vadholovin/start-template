/**
 * @title Styles
 * @description A task to compile Sass to CSS.
 */

// Dependencies
const { src, dest, series } = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const comment = require('postcss-discard-comments');
const atImport  = require('postcss-import');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpStylelint = require('gulp-stylelint');
const errorHandler = require('../util/errorHandler.js');
const { isProd } = require('../util/env.js');

const browserSync = require('browser-sync');

// Config
const { paths } = require('../config');

function scss() {
  return src(paths.styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(gulpif(isProd, sourcemaps.init() ))
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['node_modules'],
      outputStyle: isProd ? 'compressed' : 'expanded',
    }))
    .pipe(postcss([
      autoprefixer(),
      comment(),
      atImport(),
    ]))
    .pipe(gulpif(isProd, sourcemaps.write('.') ))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function stylelint() {
  return src(paths.styles.watch)
    .pipe(gulpStylelint({
      failAfterError: isProd,
      reporters: [{ formatter: 'string', console: true }],
      syntax: 'scss'
    }));
}

exports.styles = series(stylelint, scss);
