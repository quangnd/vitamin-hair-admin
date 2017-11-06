(function(){
  'use strict';
  angular
      .module('app')
      .controller('SigninCtrl', SigninCtrl);

  SigninCtrl.$inject = ['$scope', '$rootScope', '$http', '$filter', '$window', '$state', '$auth'];
  function SigninCtrl($scope, $rootScope, $http, $filter, $window, $state, $auth) {
    $scope.signin = function() {
      $auth.login({ username: $scope.email, password: $scope.password})
        .then(function(response) {
          $rootScope.currentUser = response.data.user;
          $window.localStorage.user = JSON.stringify(response.data.user);
          $state.go('app.dashboard');
        })
        .catch(function(response) {
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    }
  }
})();
