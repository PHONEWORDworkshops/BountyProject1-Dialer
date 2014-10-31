'use strict';

describe('Service: phone', function () {

  // load the service's module
  beforeEach(module('phonewordApp'));

  // instantiate service
  var phone;
  beforeEach(inject(function (_phone_) {
    phone = _phone_;
  }));

  it('should do something', function () {
    expect(!!phone).toBe(true);
  });

});
