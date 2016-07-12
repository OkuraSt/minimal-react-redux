/*
* & Imports
* En commonJS
* gulp para correr la tarea de webpack
* webpack para realizar el bundle de la aplicacion
* serve para servir los archivos al webserver
* */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');

// Webpack
// Tarea para ejecutar webpack con la entrada en app.js usando la configuracion en webpack.config.js
gulp.task('webpack', function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

// Web Server
// Tarea para iniciar el servidor y servir los archivos
gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

// Task Default
gulp.task('default', ['webpack', 'serve:web']);
