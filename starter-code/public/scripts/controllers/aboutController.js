'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = () => {
    $('#about').show().siblings().hide();

  module.aboutController = aboutController;
})(app);
