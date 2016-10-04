var BrumJS = BrumJS || {};

BrumJS.Meetup = function(meetup) {
  this.meetup = meetup;
};

BrumJS.Meetup.prototype.save = function() {
  $.ajax({
    url: '/meetups',
    data: this.meetup
  });
};
