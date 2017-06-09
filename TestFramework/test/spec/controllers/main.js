'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testFramework'));

  let ConsoleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      ConsoleCtrl = $controller('ConsoleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    inject(function() {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
