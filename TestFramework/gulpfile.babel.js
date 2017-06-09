// Generated on 2016-04-01 using generator-angular 0.15.1
'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let openURL = require("open");
let lazypipe = require('lazypipe');
let rimraf = require('rimraf');
let wiredep = require('wiredep').stream;
let runSequence = require('run-sequence');
let Server = require('karma').Server;

gulp.task('test', function (cb) {
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

gulp.task('webserver', function () {
    $.connect.server({
        root: 'app',
        port: 8001
    });
});

gulp.task('e2e', ['webdriver-update', 'webserver'], function (cb) {
    gulp.src([]).pipe($.protractor.protractor({
        configFile: "protractor.conf.js",
    })).on('error', function (e) {
        throw e;
    }).on('end', cb);
});
