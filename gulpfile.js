var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');


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

gulp.task('default',function() {
    gulp.watch('./app/templates/**/*.+(html|nunjucks)',['nunjucks']);
    gulp.watch('./app/pages/**/*.+(html|nunjucks)',['nunjucks']);
});
