/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
(function() {
    'use strict';
    angular
      .module('app', [
        'angular-loading-bar',
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ngStorage',
        'ngStore',
        'ui.router',
        'ui.utils',
        'ui.load',
        // 'ui.jp',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'toastr'
      ]);
})();
