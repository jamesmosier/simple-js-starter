(function(global, document) {
  'use strict';

  var MyApp = require('./modules/MyApp');

  global.MyApp = new MyApp();

})(window, document);
