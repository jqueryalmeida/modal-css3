var gulp = require('gulp');
var webserver = require('gulp-webserver'); // serve

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,      
      port: 3000,      
      fallback: 'index.html',
      open: 'modal'
    }));
});
