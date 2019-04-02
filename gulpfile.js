var gulp = require('gulp');
var server = require('gulp-server-livereload');
var styles = require('./gulp-tasks/sass')();
var templates = require('./gulp-tasks/templates')();
var scripts = require('./gulp-tasks/scripts')();
var copy = require('./gulp-tasks/copy')();
var config = require('./gulp-tasks/config');

// Watch task
// gulp.task('default', gulp.series('purifycss', 'templates', 'scripts', 'copy', function(done) {
gulp.task('default', gulp.series('styles', 'templates', 'scripts', 'copy', function(done) {
  // run task initially, after that watch
  // gulp.start(['styles', 'templates']);
  gulp.watch(config.source + 'scss/**/*.scss',gulp.series('styles'));
  gulp.watch(config.source + 'pages/**/*.html',gulp.series('templates'));
  gulp.src(config.dest)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
    done();
}));
