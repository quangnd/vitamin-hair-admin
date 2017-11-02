var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function () {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch([
    'apps/**/*.js',
    'scripts/*.js'
  ]).on('change', bs.reload);
  gulp.watch([
    'apps/**/*.html',
    'views/**/*.html'
  ]).on('change', bs.reload);
});
