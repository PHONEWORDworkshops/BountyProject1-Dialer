'use strict';

describe('Controller: DialerCtrl', function () {

  // load the controller's module
  beforeEach(module('phonewordApp'));

  var DialerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialerCtrl = $controller('DialerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
