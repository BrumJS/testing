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
      sinon.stub($, 'ajax');
      this.meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        date: '2016-10-20',
        description: 'JavaScript testing'
      });
    });

    afterEach(function teardownEachTest() {
      $.ajax.restore();
    });

    it('should correctly post a new meetup to the server', function() {
      this.meetup.save();

      expect($.ajax).to.have.been.calledWithMatch({
        method: 'POST',
        url: '/meetups'
      });
    });

    it('should send the correct payload to the server', function() {
      this.meetup.save();

      expect($.ajax).to.have.been.calledWithMatch({
        url: '/meetups',
        data: {
          name: 'BrumJS October',
          date: '2016-10-20',
          description: 'JavaScript testing'
        }
      });
    });

    it('should not save to the server when the meetup is invalid', function() {
      var meetup = new BrumJS.Meetup({
        name: 'BrumJS October',
        description: 'JavaScript testing'
      });
      meetup.save();

      expect($.ajax).not.to.have.been.called;
    });
  });
});
