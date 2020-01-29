/**
 * @title Scripts
 * @description A task to concatenate and compress js files.
 */

// Dependencies
const { src, dest, series } = require('gulp');
// const terser = require('gulp-terser');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const gulpif = require('gulp-if');
const gulpEslint = require('gulp-eslint');
const errorHandler = require('../util/errorHandler.js');
const babel = require('gulp-babel');
const { isProd } = require('../util/env.js');

// Config
const { paths } = require('../config');

function esTranspile() {
  return src(paths.scripts.src)
    .pipe(plumber({errorHandler}))
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ["@babel/plugin-proposal-class-properties"]
    }))
    // .pipe(gulpif(isProd, terser())) /* minify */
    .pipe(dest(paths.scripts.dest));
}

function esLint() {
  return src(paths.scripts.src)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpif(isProd, gulpEslint.failAfterError()));
}

function libs() {
  return src(paths.libs.src)
    .pipe(concat('libs.min.js'))
    .pipe(dest(paths.scripts.dest));
}

exports.scripts = series(libs, esLint, esTranspile);
