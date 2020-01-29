/**
 * @title Icons
 * @description A task to optimize svg and make the svg-sprite.
 */

// Dependencies
const { src, dest } = require('gulp');
const svgSymbols = require('gulp-svg-symbols');
const svgmin = require('gulp-svgmin');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const errorHandler = require('../util/errorHandler.js');
const rename = require('gulp-rename');

// Config
const { paths } = require('../config');

function icons() {
  return src(paths.icons.src)
    .pipe(plumber({ errorHandler }))
    .pipe(svgmin())
    .pipe(
      svgSymbols({
        templates: ["default-svg"],
        title: false,
        id: 'icon-%f',
        class: '%f',
        svgAttrs: {
          width: 0,
          height: 0,
          display: "none"
        }
      })
    )
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { optimizationLevel: 3 },
          { progessive: true },
          { interlaced: true },
          { removeViewBox: false },
          { removeUselessStrokeAndFill: true },
          { cleanupIDs: false },
          { cleanupAttrs: true },
          { removeMetadata: true },
          { removeTitle: true },
          { removeAttrs: { attrs: '(fill|stroke|data-name)' } },
        ],
      }),
    ]))
    .pipe(rename('icons.svg'))
    .pipe(dest(paths.icons.dest));
}

exports.icons = icons;
