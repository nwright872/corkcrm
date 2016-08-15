var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true,
    }));
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/assets/css'))
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('default', ['webserver', 'styles', 'nunjucks'], function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./app/templates/**/*.+(html|nunjucks)',['nunjucks']);
    gulp.watch('./app/pages/**/*.+(html|nunjucks)',['nunjucks']);
});
