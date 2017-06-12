// Generated on 2016-04-01 using generator-angular 0.15.1
'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let rimraf = require('rimraf');
let lazypipe = require('lazypipe');
let Server = require('karma').Server;

let yeoman = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist'
};

let es6ClientScript = lazypipe()
  .pipe($.babel, {
    presets: ['es2015']
  })
  .pipe(gulp.dest, yeoman.app + '/build-scripts');

let es6TestScript = lazypipe()
  .pipe($.babel, {
    presets: ['es2015']
  })
  .pipe(gulp.dest, 'build-tests');

gulp.task('clean:tests', function(cb) {
  rimraf('./build-tests', cb);
});

gulp.task('clean:client', function(cb) {
  rimraf('./app/build-scripts', cb);
});

gulp.task('es6:frontend', ['clean:client'] ,() => {
  return gulp.src(yeoman.app + '/scripts/**/*.js')
    .pipe(es6ClientScript());
});

gulp.task('es6:tests', ['clean:tests'], ()=> {
  return gulp.src('test/**/*.js')
    .pipe(es6TestScript());
});

gulp.task('es6', ['es6:frontend', 'es6:tests'], (cb)=>{
  cb();
});

gulp.task('test', ['es6'] , function (cb) {
    return new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, cb).start();
});

gulp.task('webdriver-update', function (cb) {
    $.protractor.webdriver_update({
        webdriverManagerArgs: ['--ignore_ssl']
    }, cb);
});

gulp.task('webserver', ['es6'], function () {
    $.connect.server({
        root: 'app',
        port: 8001
    });
});

gulp.task('e2e:tests', ['webdriver-update', 'webserver'], function (cb) {
    gulp.src([]).pipe($.protractor.protractor({
        configFile: "protractor.conf.js",
    })).on('error', function (e) {
        throw e;
    }).on('end', cb);
});

gulp.task('e2e', ['e2e:tests'], function (){
    $.connect.serverClose();
});
