var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('e2e-serve', ['e2e-build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ["."],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
