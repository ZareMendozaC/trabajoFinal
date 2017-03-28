var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	// tarea script
});

gulp.task('style', function() {
	// tarea style
});

gulp.task('images', function() {
	// tarea images
});


gulp.task('default', ['images', 'style', 'script']);