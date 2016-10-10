var BrumJS = BrumJS || {};

BrumJS.Meetup = function(meetup) {
  this.meetup = meetup;
};

BrumJS.Meetup.prototype.isValid = function() {
  if(!this.meetup) {
    return false;
  }
  if(!this.meetup.hasOwnProperty('name') && !this.meetup.hasOwnProperty('date')) {
    return false;
  }
  if(isNaN(Date.parse(this.meetup.date))) {
    return false;
  }
  return true;
};

BrumJS.Meetup.prototype.save = function() {
  if(this.isValid()) {
    $.ajax({
      url: '/meetups',
      method: 'POST',
      data: JSON.stringify(this.meetup)
    });
  }
};
