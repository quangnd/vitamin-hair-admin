(function(){
   'use strict';
   angular
       .module('app')
       .controller('RegisterCtrl', RegisterCtrl);

   RegisterCtrl.$inject = ['$scope', '$http', '$filter'];
   function RegisterCtrl($scope, $http, $filter) {
       var vm = $scope;
       $scope.submit = function () {
           var url = SERVER_API + "register";
           var data = {
               account: vm.account,
               pass1: vm.pass1,
               pass2: vm.pass2,
               email: vm.email,
               phone: vm.phone
           };

           $http.post(url, data, {
               withCredentials: true
           }).then(function (response) {
               console.log(response);
               if (response.data.status == RESPONSE_STATUS_SUCCESS) {
                   vm.account = '';
                   vm.pass1 = '';
                   vm.pass2 = '';
                   vm.email = '';
                   vm.phone = '';
                   alert('Dang ki thanh cong');
               } else if (response.data.status == RESPONSE_STATUS_ERROR) {
                   vm.message = response.data.message;
               }
           }, function (err) {
               $scope.isServerError = false;
           });
       };
   }
})();