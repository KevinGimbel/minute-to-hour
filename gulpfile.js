/*
 *  * Loading the modules we neeed.
 *  */
var gulp = require('gulp');
var sass = require('gulp-sass');

  var path = {
        scss: './src/sass/',
        css: './build/css/'
      }

  
    /* super-easy sass task using gulp-sass and compiling with
     * node-sass and Libsass. Lightning fast, also! 
     */
      gulp.task('sass', function() {
        gulp.src( path.scss + 'style.scss')
            .pipe(sass({ outputStyle: 'compressed' }))
              .pipe(gulp.dest( path.css ))
      });
  
   gulp.task('watch', function() {
      gulp.watch( path.scss + '**/**/**/*.scss' , ['sass']);
   });

gulp.task('default', ['watch', 'sass']);
