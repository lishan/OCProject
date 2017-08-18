'use strict';

/**
 * Main Controller
 */
angular.module('basic').controller('MainCtrl',['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      smartIndent : true,
      tabSize : 2,
      mode: "python",
      theme: "duotone-light"
    });

}]);
