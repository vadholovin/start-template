/**
 * @title Server
 * @description A task to initialise a local server.
 */

// Dependencies
const browserSync = require('browser-sync').create();

// Config
const { paths } = require('../config');

function serve(cb) {
  browserSync.init({
    open: true,
    reloadOnRestart: true,
    reloadDebounce: 100,
    port: 3000,
    server: {
      baseDir: [ paths.dest ]
    },
    notify: false,
  });
  cb();
}

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.serve = serve;
exports.reload = reload;
