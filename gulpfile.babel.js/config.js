/*
 * @title Config
 */

// Paths
exports.paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/js',
  },
  templates: {
    src: 'src/templates/pages/*.pug',
    watch: 'src/templates/**/*.pug',
    modules: 'src/modules/**/*.pug',
    dest: 'dist/'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/assets/img',
  },
  icons: {
    src: 'src/images/svg/*',
    dest: 'dist/assets/img/sprites',
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  },
  copy: {
    src: 'src/static/*',
    dest: 'dist/'
  },
  libs: {
    src: [
      // 'node_modules/jquery/dist/jquery.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.min.js',
      // 'node_modules/slick-carousel/slick/slick.min.js',
      // 'node_modules/inputmask/dist/inputmask.min.js',
      // 'node_modules/ismobilejs/dist/isMobile.min.js',
      // 'app/libs/micromodal/micromodal.polyfill.min.js',
      // 'app/libs/micromodal/micromodal.min.js',
    ]
  },
};
