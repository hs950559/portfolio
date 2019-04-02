var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var config = require('./config');
var purify = require('gulp-purifycss');

module.exports = function() {
    gulp.task('styles', function() {
        return gulp.src(config.source + 'scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded', // nested, expanded, compact, compressed, 
            imagePath: '../images',
            precision: 3,
            sourceComments: 'map',
            errLogToConsole: true
        }))
        .on('error', notify.onError(function(error) {
            return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.dest + 'css/'))
        .pipe(notify({
            message: "Compilation Successful"
        }));
    });


    gulp.task('purifycss', gulp.series('styles', function() {
      return gulp.src(config.dest + 'css/main.css')
        .pipe(purify([config.dest + 'js/**/*.js', config.dest + '**/*.html']))
        .pipe(gulp.dest(config.dest+'css/'));
    }));
};