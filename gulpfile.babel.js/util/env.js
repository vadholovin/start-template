/**
 * @title Environments
 */

// const NODE_ENV = process.env.NODE_ENV ? 'production' : 'development';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

// exports.NODE_ENV = NODE_ENV;
exports.isDev = isDev;
exports.isProd = isProd;
