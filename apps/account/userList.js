(function () {
  angular.module('app')
    .controller('UserListCtrl', UserListCtrl);

  function UserListCtrl($scope, $rootScope, $http, $window, toastr, DTOptionsBuilder, DTColumnBuilder, $q) {
    $http.get(SERVER_API + '/admin/listuser')
      .then(function(response) {
        $scope.users = response.data.users;
      })
    
    $scope.edit = function(user) {
      
    }

    $scope.delete = function(user) {
      
    }
    $scope.dtOptions = DTOptionsBuilder.newOptions()
      .withPaginationType('full_numbers')
      .withOption('lengthChange', true)
      .withOption('searching', true)
      .withDisplayLength(50);
  }
})();
