var expect;
if(typeof(require) != 'undefined') {
  expect = require('chai').expect;
} else {
  expect = window.chai.expect;
}

describe('Hello World', function() {
  it('should work', function() {
    expect(true).to.equal(true);
  });
});
