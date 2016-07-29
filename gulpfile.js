// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
    // corpo da tarefa
    // return gulp
    //         .src(['src/js/**/*.js'])
    //         .pipe(uglify())
    //         .pipe(gulp.dest('build/js'));           
});

gulp.task('watch', function() {
    // corpo da tarefa 
    gulp.watch('public/app/**/*.ts', function(event) {
        gutil.log('File '+ event.path +' was '+ event.type +', running tasks...');
        gulp.run('scripts');
    });
});


gulp.task('sass', function () {
    gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});