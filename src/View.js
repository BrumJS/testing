var BrumJS = BrumJS || {};

BrumJS.View = function(elements, meetup) {
  this.nameInput = $(elements.name);
  this.descriptionInput = $(elements.description);
  this.dateInput = $(elements.date);
  this.submitInput = $(elements.submit);
  this.meetup = meetup;
};

BrumJS.View.prototype.listen = function() {
  this.nameInput.change(function(event) {
    this.meetup.addData('name', event.target.value);
    if (this.meetup.isValid()) {
      this.submitInput.prop('disabled', false);
    } else {
      this.submitInput.prop('disabled', true);
    }
  }.bind(this));

  this.dateInput.change(function() {
    this.meetup.addData('date', event.target.value);
    if(this.meetup.isValid()) {
      this.submitInput.prop('disabled', false);
    } else {
      this.submitInput.prop('disabled', true);
    }
  }.bind(this));
};
