'use strict';

/**
 * @ngdoc overview
 * @name basicApp
 * @description
 * # basicApp
 *
 * Main module of the application.
 */
angular
  .module('basic', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngFileUpload',
    "isteven-multi-select",
    "dndLists",
    'ui.bootstrap',
    'ui-notification',
    'angularSpinner',
    'ngCookies',
    'ui.select',
    'toggle-switch',
    'cfp.hotkeys',
    'ui.bootstrap.datetimepicker',
    'angularMoment',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/dataModel', {
        templateUrl: 'views/dataModel.html',
        controller: 'DataModelCtrl'
      })
      .when('/operation', {
        templateUrl: 'views/operation.html',
        controller: 'OperationCtrl'
      })
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl'
      })
      .when('/setting', {
        templateUrl: 'views/main.html',
        controller: 'SettingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
