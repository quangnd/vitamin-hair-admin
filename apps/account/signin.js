(function(){
  'use strict';
  angular
      .module('app')
      .controller('SigninCtrl', SigninCtrl);

  SigninCtrl.$inject = ['$scope', '$rootScope', '$http', '$filter', '$window', '$state'];
  function SigninCtrl($scope, $rootScope, $http, $filter, $window, $state) {
    $scope.email = 'q@gmail.com';
    $scope.password = '1';
    $scope.signin = function() {
      if ($scope.email === 'q@gmail.com' && $scope.password === '1') {
        $rootScope.isLoggedIn = true;
        $window.localStorage.isLoggedIn = true;
        // $rootScope.currentUser = user;
        // $window.localStorage.user = JSON.stringify(response.data.user);
        $state.go('app.dashboard');
      }
    }
  }
})();
