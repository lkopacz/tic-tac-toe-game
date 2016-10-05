//Requires gulp
var gulp = require('gulp');

// Requires all the plugins
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
  return gulp.src('source/scss/**/*.scss')
	.pipe(sass()) // Using gulp-sass
	.pipe(gulp.dest('stylesheets'))
});

gulp.task('autoprefixer', function () {
	return gulp.src('stylesheets/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('minify-css', function() {
  return gulp.src('stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function(){
  gulp.watch('source/scss/**/*.scss', ['sass']); 
  // Other watchers
});

