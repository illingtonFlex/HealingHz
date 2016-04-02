// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var qunit = require('gulp-qunit');


// // QUnit testing module
// gulp.task('test', function() {
//   return gulp.src('./test/**/*.html')
//         .pipe(qunit());
// });

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('www/scripts'));
});

// Copy files to www directory
gulp.task('copyfiles', function() {
    gulp.src(['./app/*.html', './app/*.css', './app/audio/*.ogg', './app/audio/*.mpg'])
    .pipe(gulp.dest('www'));
});

// Watch Files For Changes
gulp.task('watch', function() {
//    gulp.watch('test/*.html', ['test']);
    gulp.watch('app/*.html', ['copyfiles']);
    gulp.watch('app/*.css', ['copyfiles']);
    gulp.watch('app/*.html', ['copyfiles']);
    gulp.watch('app/scripts/**/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'copyfiles', 'test']);
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'copyfiles']);