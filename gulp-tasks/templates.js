var gulp = require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');
var template = require('gulp-template');
var config = require('./config');

module.exports = function() {
    gulp.task('templates', function() {
        var templates = {};
        var files = fs.readdirSync(config.source + 'pages/partials')
            .filter(function(file) {
                if (file.charAt(0) === '_') {
                    return file;
                }
            })
            .forEach(function(template) {
                var slug = template.replace('_', '').replace('.html', '');
                templates[slug] = fs.readFileSync(config.source + "pages/partials/" + template, "utf8");
            });

        return gulp.src([config.source + 'pages/*.html'])
            .pipe(template(templates))
            .on('error', gutil.log)
            .pipe(gulp.dest(config.dest));
    });
};