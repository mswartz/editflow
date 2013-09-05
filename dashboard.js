if (Meteor.isClient) {


Template.dashboard.greeting = function () {
  return "Welcome to editflow.";
};

Template.dashboard.stories = function (){
  return Stories.find().fetch();
}

Template.dashboard.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

}