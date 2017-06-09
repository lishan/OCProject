'use strict';

/**
 * Main Controller
 */
angular.module('testFramework', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize'
]).controller('ConsoleCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}]);