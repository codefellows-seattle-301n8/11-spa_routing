'use strict';
/////everthing is going to be saved in this app obj
////the only global var is app; app is the only thing in the global namespace
///////var app equal to app OR this empty object
/////everything that we want to have on the global namespace or on a namespace we can access from other pieces is going to be stored on this app object
var app = app || {};

////use page.js to call the about controller function or a function in the about controller when you hit a certain url
//////wrapping everything in an iffe; everything is going to change the context
//////where is the var context, where do you access the var? inside the scope of the closest function

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(app);

//////it's attached app to it bc we pass app into it as a parameter, which gets turned into module which then we can save things to

///////how do we call about controller from another file or from somewhere else if opt out about controller
//////we need to grab app.get to /*
