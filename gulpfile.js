var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: false,
      directoryListing: false,
      open: true,
    }));
});

gulp.task('styles', function() {
  gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('./app/assets/css'))
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('views/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['views/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('default', ['webserver', 'styles', 'nunjucks'], function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./views/templates/**/*.+(html|nunjucks)',['nunjucks']);
    gulp.watch('./views/pages/**/*.+(html|nunjucks)',['nunjucks']);
});
