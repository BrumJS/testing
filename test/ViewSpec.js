var expect = chai.expect;

describe('View', function() {

  function sendEvent(element, value) {
    var event = new Event('change', {
      target: {
        value: value
      }
    });
    element.dispatchEvent(event);
  }

  beforeEach(function setupEachTest() {
    this.meetup = new BrumJS.Meetup();
    this.nameInput = document.createElement('input');
    this.submitInput = document.createElement('button');
    this.addDataSpy = sinon.spy(this.meetup, 'addData');
  });

  describe('changing the name input', function() {

    it('updates the meetup model with the value of the name input', function() {
      var view = new BrumJS.View({name: this.nameInput }, this.meetup);
      view.listen();

      this.nameInput.setAttribute('value', 'My Meetup');
      sendEvent(this.nameInput, 'My Meetup');

      expect(this.addDataSpy).to.have.been.calledWith('name', 'My Meetup');
    });

    it('enables the submit button when the meetup model is valid', function() {
      this.submitInput.setAttribute('disabled', true);

      sinon.stub(this.meetup, 'isValid').returns(true);

      var view = new BrumJS.View({name: this.nameInput, submit: this.submitInput },
        this.meetup);
      view.listen();

      this.nameInput.setAttribute('value', 'My Meetup');
      sendEvent(this.nameInput, 'My Meetup');

      expect(this.submitInput.getAttribute('disabled')).to.equal(null);
    });

    it('disables the submit button when the meetup model is invalid', function() {
      sinon.stub(this.meetup, 'isValid').returns(false);

      var view = new BrumJS.View({name: this.nameInput, submit: this.submitInput },
        this.meetup);
      view.listen();

      this.nameInput.setAttribute('value', 'My Meetup');
      sendEvent(this.nameInput, '');

      expect(this.submitInput.getAttribute('disabled')).not.to.equal(null);
    });
  });
});
