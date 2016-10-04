if(typeof(require) != 'undefined') {
  var chai = require('chai');
  var sinon = require('sinon');
  var sinonChai = require('sinon-chai');
  chai.use(sinonChai);
  var expect = chai.expect;
}

describe('Creating Meetups', function() {
  it('should correctly post a new meetup to the server', function() {
    sinon.stub($, 'ajax');

    var meetup = new BrumJS.Meetup();
    meetup.save();

    expect($.ajax).to.have.been.calledWithMatch({ url: '/meetups' });
  });
});
