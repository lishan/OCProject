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
    'ui.router',
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
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    $stateProvider
      .state('home', {
        url:"/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('dashboard', {
        url:"/dashboard",
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('dataModel', {
        url:"/dataModel",
        templateUrl: 'views/dataModel.html',
        controller: 'DataModelCtrl'
      })
      .state('operation', {
        url:"/operation",
        templateUrl: 'views/operation.html',
        controller: 'OperationCtrl'
      })
      .state('setting', {
        url:"/setting",
        templateUrl: 'views/main.html',
        controller: 'SettingCtrl'
      });
  });
