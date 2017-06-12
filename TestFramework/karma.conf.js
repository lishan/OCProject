// Karma configuration
// Generated on Wed Jun 07 2017 15:04:36 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/jquery-ui/jquery-ui.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-aria/angular-aria.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/bootstrap-sidebar/dist/js/sidebar.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/ng-file-upload/ng-file-upload.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
      'app/bower_components/spin.js/spin.js',
      'app/bower_components/angular-spinner/angular-spinner.js',
      'app/bower_components/angular-ui-select/dist/select.js',
      'app/bower_components/angular-toggle-switch/angular-toggle-switch.js',
      'app/build-scripts/**/*.js',
      'build-tests/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
