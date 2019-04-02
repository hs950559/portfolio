var gulp = require('gulp');
var config = require('./config');

module.exports = function() {
    gulp.task('scripts', function() {
        return gulp.src([config.source + 'js/**/*.js', config.source + 'vendor/**/*.js'])
            .pipe(gulp.dest(config.dest + 'js'));
    });
};