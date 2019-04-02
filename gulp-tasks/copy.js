var gulp = require("gulp");
var config = require('./config');

module.exports = function(){
	gulp.task('copy', function() {
	    return gulp.src(config.filesToCopy)
	        .pipe(gulp.dest(config.dest+'fonts'));
	});	
};
