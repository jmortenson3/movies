const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['watch', 'sass'], function() {
});

gulp.task('sass', function() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
});

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.scss', ['sass']);
  gulp.watch('./src/styles/custom/*.scss', ['sass']);
  gulp.watch('./src/styles/custom/components/*.scss', ['sass']);
  // gulp.watch('public/**/*.*').on('change', reload);
  // gulp.watch('src/*.*').on('change', reload);
  // gulp.watch('src/**/*.jsx').on('change', reload);
  // gulp.watch('src/**/*.js').on('change', reload);
});
