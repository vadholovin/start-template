/**
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
const { series, parallel } = require('gulp');

// Tasks
const { clean } = require('./clean');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const { templates } = require('./templates');
const { assets } = require('./assets');
const { icons } = require('./icons');
const { images } = require('./images');
const { copy } = require('./copy');

exports.build = series(
  clean,
  parallel(
    styles,
    scripts,
    templates,
    assets,
    icons,
    images,
    copy
  )
);
