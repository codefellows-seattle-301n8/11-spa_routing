'use strict';
var app = app || {};

(function(module) {

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:

  const aboutController = {
    $(document).ready(() => {
      $("main > section").hide();
      $("#about").show();
    };
  });



  module.aboutController = aboutController;
})(app);
