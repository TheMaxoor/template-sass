'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename(function(path){
      path.basename += ".min";
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(livereload());
});

gulp.task('js', function (){
  gulp.src('./assets/js/**/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true,
        ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('./app/js'))
})

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'js'], function() {
gutil.log(gutil.colors.green("  ____   ____  __        __ ____"));  
gutil.log(gutil.colors.green(" / ___| / ___| \\ \\      / /|  _ \\ "));
gutil.log(gutil.colors.green("| |  _ | |  _   \\ \\ /\\ / / | |_) |"));
gutil.log(gutil.colors.green("| |_| || |_| |   \\ V  V /  |  __/")); 
gutil.log(gutil.colors.green(" \\____| \\____|    \\_/\\_/   |_|"));    
gutil.log(gutil.colors.green("                                    "));
});
