'use strict';
var app = app || {};

(function(module) {

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:

  const aboutController = {};
  aboutController.init = function() {
    $("#articles").hide();
    $("#about").show();
  };



  module.aboutController = aboutController;
})(app);
