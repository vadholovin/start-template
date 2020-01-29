/**
 * @title Clean
 * @description A task to remove the 'dist' directory.
 */

// Dependencies
const del = require('del');

// Config
const { paths } = require('../config');

function clean() {
  return del([paths.dest]);
}

exports.clean = clean;
