'use strict';

/**
 * @ngdoc overview
 * @name basicApp
 * @description
 * # basicApp
 *
 * Main module of the application.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

import './sass/main.scss';
import main from './views/main.html';

let app = angular.module('basic', [
  uirouter
]);

require('./scripts/main.js');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    $stateProvider.state('home', {
        url:"/home",
        template: main,
        controller: 'MainCtrl'
      })
  }]);
