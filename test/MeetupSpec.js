var expect = chai.expect;

describe('Meetups', function() {

  describe('Validating Meetups', function() {
    it('should not pass given no meetup data', function() {
      var meetup = new BrumJS.Meetup();
      expect(meetup.isValid()).to.equal(false);
    });

    it('should pass given at least a name and date', function() {
      var meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        date: '2016-10-20'
      });
      expect(meetup.isValid()).to.equal(true);
    });

    it('should not pass given an invalid date', function() {
      var meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        date: 'this month'
      });
      expect(meetup.isValid()).to.equal(false);
    });
  });

  describe('Persisting Meetups', function() {

    beforeEach(function setupEachTest() {
      this.server = sinon.fakeServer.create();

      this.meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        date: '2016-10-20',
        description: 'JavaScript testing'
      });
    });

    afterEach(function teardownEachTest() {
      this.server.restore();
    });

    it('should correctly post a new meetup to the server', function() {
      this.meetup.save();
      expect(this.server.requests[0].url).to.equal('/meetups');
      expect(this.server.requests[0].method).to.equal('POST');
    });

    it('should send the correct payload to the server', function() {
      this.meetup.save();

      expect(JSON.parse(this.server.requests[0].requestBody)).to.deep.equal({
        name: 'BrumJS October',
        date: '2016-10-20',
        description: 'JavaScript testing'
      });
    });

    it('should not save to the server when the meetup is invalid', function() {
      var meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        description: 'JavaScript testing'
      });
      meetup.save();

      expect(this.server.requests.length).to.equal(0);
    });

    it('should trigger the success callback on receiving a 201', function() {
      var successCallback = sinon.spy();

      this.server.respondWith('POST', '/meetups', [201, {
        'Content-Type': 'application/json'
      }, '{}']);

      this.meetup.save(successCallback);

      this.server.respond();

      expect(successCallback).to.have.been.called;
    });

    it('should trigger the error callback on failure', function() {
      var errorCallback = sinon.spy();

      this.server.respondWith('POST', '/meetups', [500, {
        'Content-Type': 'application/json'
      }, '']);

      this.meetup.save(null, errorCallback);

      this.server.respond();

      expect(errorCallback).to.have.been.called;
    });
  });
});
