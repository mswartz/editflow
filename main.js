Stories = new Meteor.Collection("stories");
Pages = new Meteor.Collection("pages");

if (Meteor.isClient) {
  //Add Routers
  Meteor.Router.add({
    '/': 'dashboard',
    '/newstory': 'newstory',
    '/stories': 'stories',
    '/newpage': 'newpage',
    '*': 'not_found'
  });
}
  
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
