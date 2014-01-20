var path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function(){
  gulp.run('uglify-js', 'less', 'minify-html');

  gulp.watch('src/js/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('uglify-js');
  });

  gulp.watch('src/less/**/*.less', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('less');
  });

  gulp.watch('src/html/**/*.html', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('minify-html');
  });
});

gulp.task('debug', function(){
  gulp.run('copy-js', 'less', 'copy-html');

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
    gulp.run('copy-html');
  });
});

gulp.task('uglify-js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

gulp.task('copy-js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('js'))
});

gulp.task('minify-html', function() {
  gulp.src('src/html/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('template'))
});

gulp.task('copy-html', function() {
  gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('template'))
});

gulp.task('less', function () {
  gulp.src('src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'));
});