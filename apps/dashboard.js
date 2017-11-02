(function(){
  'use strict';
  angular
      .module('app')
      .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['$scope', '$rootScope', '$http', '$filter', '$window', '$state'];
  function DashboardCtrl($scope, $rootScope, $http, $filter, $window, $state) {

  }
})();
