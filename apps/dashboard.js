(function(){
  'use strict';
  angular
      .module('app')
      .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['$scope', '$rootScope', '$http', '$filter', '$window', '$state', '$auth'];
  function DashboardCtrl($scope, $rootScope, $http, $filter, $window, $state, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  }
})();
