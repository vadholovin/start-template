/**
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Tasks
const { build } = require('./tasks/build');
const { deploy } = require('./tasks/deploy');
const { watch } = require('./tasks/watch');
const { dev } = require('./tasks/dev');

exports.build = build;
exports.deploy = deploy;
exports.watch = watch;
exports.default = dev;
