var path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function(){
  gulp.run('uglify-js', 'less', 'minify-template');

  gulp.watch('src/js/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('uglify-js');
  });

  gulp.watch('src/less/**/*.less', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('less');
  });

  gulp.watch('src/template/**/*.html', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('minify-template');
  });
});

gulp.task('debug', function(){
  gulp.run('copy-js', 'less', 'copy-template');

  gulp.watch('src/js/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('copy-js');
  });

  gulp.watch('src/less/**/*.less', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('less');
  });

  gulp.watch('src/js/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('copy-template');
  });
});

gulp.task('uglify-js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
});

gulp.task('copy-js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('assets/js'))
});

gulp.task('minify-template', function() {
  gulp.src('src/template/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('assets/template'))
});

gulp.task('copy-template', function() {
  gulp.src('src/template/**/*.html')
    .pipe(gulp.dest('assets/template'))
});

gulp.task('less', function () {
  gulp.src('src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'assets/less', 'includes') ]
    }))
    .pipe(gulp.dest('css'));
});