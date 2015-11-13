'use strict';

/**
 * Constructor
 */
var MyApp = function() {
  this.elem = document.getElementById('target');
  this.initialize();
};

/**
 * Initializes the app
 */
MyApp.prototype.initialize = function() {
  this.establishHandlers();
};

/**
 * Establishes event handlers
 */
MyApp.prototype.establishHandlers = function() {
  document.addEventListener('DOMContentLoaded', function() {

    this.elem.addEventListener('click', this.someFunction, true);

  }.bind(this), false);
};

/**
 * Add & remove token logic
 */
MyApp.prototype.someFunction = function(e) {
  var target = e.target;
  console.log(target);
};

module.exports = MyApp;