(function () {
    angular
        .module('app')
        .controller('ForgotPassCtrl', ForgotPassCtrl);

    function ForgotPassCtrl($scope, $http, $state) {
        $scope.submit = function () {

            var url = SERVER_API + "account/changeAccountInfoUseSMS";
            var data = {
                account: $scope.account,
                info_change: $scope.info_change,
                action_type: 6
            };

            $http.post(url, data, {
                withCredentials: true
            }).then(function (response) {
                $scope.res = response.data;
                $scope.account = '';
                $scope.info_change = '';
            }, function (err) {
                $scope.isServerError = false;
            });
        }
    }
})();