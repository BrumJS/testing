if(typeof(require) != 'undefined') {
  var chai = require('chai');
  var sinon = require('sinon');
  var sinonChai = require('sinon-chai');
  chai.use(sinonChai);
  var expect = chai.expect;
}

describe('Creating Meetups', function() {
  beforeEach(function setupEachTest() {
    sinon.stub($, 'ajax');
  });

  afterEach(function teardownEachTest() {
    $.ajax.restore();
  });

  it('should correctly post a new meetup to the server', function() {
    var meetup = new BrumJS.Meetup();
    meetup.save();

    expect($.ajax).to.have.been.calledWithMatch({ url: '/meetups' });
  });

  it('should send the correct payload to the server', function() {
    var meetup = new BrumJS.Meetup({
      name: 'BrumJS October',
      description: 'JavaScript testing'
    });
    meetup.save();

    expect($.ajax).to.have.been.calledWithMatch({
      url: '/meetups',
      data: {
        name: 'BrumJS October',
        description: 'JavaScript testing'
      }
    });
  });
});
