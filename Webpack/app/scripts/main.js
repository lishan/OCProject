'use strict';

/**
 * Main Controller
 */
import angular from 'angular';

export default angular.module('basic').controller('MainCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.text = "This is a title";
    console.log("running");
}]);
