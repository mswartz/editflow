if (Meteor.isClient) {


Template.newstory.greeting = function () {
  return "Welcome to editflow.";
};

Template.newstory.stories = function (){
  return Stories.find().fetch();
}

Template.newstory.events({
  'click input.save' : function () {
  	Stories.insert({
  		"title": $('.title').text(),
  		"author": $('.author').text(),
  		"body": $('.body').html()
  	});

    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

}