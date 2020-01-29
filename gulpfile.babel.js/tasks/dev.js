/**
 * @title Dev
 * @description A task to generate a development environment,
 * start the server and watch for changes.
 */

// Dependencies
const { series } = require('gulp');

// Tasks
const { build } = require('./build');
const { watch } = require('./watch');

exports.dev = series(
  build,
  watch
);
