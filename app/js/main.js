import MyApp from './modules/MyApp';
import AppApi from './modules/AppApi';

(function main(global) {
  global.MyApp = MyApp;
  global.AppApi = AppApi;
})(window);
