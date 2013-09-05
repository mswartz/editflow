if (Meteor.isClient) {

Template.stories.stories = function (){
  return Stories.find({}).fetch();
}

}