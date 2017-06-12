'use strict';

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8001');
    expect(browser.getTitle()).toEqual('橘云多租户管控平台');
  });
});
