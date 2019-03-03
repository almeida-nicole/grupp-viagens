const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});


gulp.task('images', () =>
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
);

gulp.task('default', gulp.series('images','sass', 'sass:watch' ));
gulp.task('build', gulp.series('sass', 'images'));
