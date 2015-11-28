// (all are installed using sudo npm install --save ...)

var gulp = require('gulp'); // skeleton responsible for build process
var gutil = require('gulp-util');  // for logging of build process (debugging)
var source = require('vinyl-source-stream');
var browserify = require('browserify'); // looks at dependencies/load order
var watchify = require('watchify'); // auto re-runs gulp when files change
var reactify = require('reactify'); // converts jsx files to js

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'], // 'parent' component
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);

});
