/**
 * Constructor
 */
const MyApp = function MyApp() {
  this.elem = document.getElementById('target');
  this.initialize();
};

/**
 * Initializes the app
 */
MyApp.prototype.initialize = function initialize() {
  this.establishHandlers();
};

/**
 * Establishes event handlers
 */
MyApp.prototype.establishHandlers = function establishHandlers() {
  document.addEventListener('DOMContentLoaded', function domReady() {
    this.elem.addEventListener('click', this.someFunction, true);
  }.bind(this), false);
};

/**
 * Defines what happens on button click
 */
MyApp.prototype.someFunction = function someFunction(e) {
  const target = e.target;
  console.log(target);
};

export default MyApp;
