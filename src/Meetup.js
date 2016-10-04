var BrumJS = BrumJS || {};

BrumJS.Meetup = function() {};

BrumJS.Meetup.prototype.save = function() {
  $.ajax({
    url: '/meetups'
  });
};
