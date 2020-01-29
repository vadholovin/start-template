/**
 * @title Templates
 * @description A task to compile templates via Pugjs.
 */

// Dependencies
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const prettify = require('gulp-jsbeautifier');
const errorHandler = require('../util/errorHandler.js');

// Config
const { paths } = require('../config');

function templates() {
  return src(paths.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(filter(file => {
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    .pipe(pug())
    .pipe(prettify({
      braceStyle: 'expand',
      indentSize: 2,
      indentWithTabs: false,
      indentInnerHtml: true,
      preserveNewlines: true,
      endWithNewline: true,
      wrapLineLength: 120,
      maxPreserveNewlines: 50,
      wrapAttributesIndentSize: 1,
      unformatted: ['use'],
      "html": {
        "end_with_newline": true,
        "indent_size": 2,
        preserveNewlines: true,
        "indent-empty-lines": true,
        wrapAttributesIndentSize: 1,
        inline: [],
      }
    }))
    .pipe(dest(paths.templates.dest));
}

exports.templates = templates;
