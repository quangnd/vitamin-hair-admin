/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;

          $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'app.signin' && toState.name !== 'app.forgot-pass') {
              var isLoggedIn = localStorage !== undefined && localStorage.user !== undefined || false;

              if(!isLoggedIn) {
               $state.go('app.signin');
              }
            }
          });
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG', '$locationProvider', 'toastrConfig', '$authProvider'];
      function config( $stateProvider,   $urlRouterProvider,   MODULE_CONFIG , $locationProvider, toastrConfig, $authProvider) {

        angular.extend(toastrConfig, {
          autoDismiss: false,
          containerId: 'toast-container',
          maxOpened: 0,
          newestOnTop: true,
          positionClass: 'toast-bottom-right',
          preventDuplicates: false,
          preventOpenDuplicates: false,
          target: 'body'
        });

        var p = getParams('layout'),
            l = p ? p + '.' : '',
            layout = 'views/layout/layout.'+l+'html';
            // dashboard = 'views/dashboard/dashboard.'+l+'html';

        $authProvider.loginUrl = LOGIN_API;
    
        function loginRequired($location, $auth) {
          if (!$auth.isAuthenticated()) {
            $location.path('/app/account/signin');
          }
        }
        //$locationProvider.html5Mode(true);
        $urlRouterProvider
          .otherwise('/app/account/signin');

        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: 'views/layout/layout.1.html'
              }
            },
            resolve: load(['ui.bootstrap', 'scripts/controllers/bootstrap.js'])
          })

            .state('app.userList', {
                url: '/user-list',
                templateUrl: 'apps/account/userList.html',
                data : { title: 'User List' },
                controller: "UserListCtrl",
                resolve: load('apps/account/userList.js')
            })

            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'apps/dashboard.html',
                data : { title: 'Dashboard' },
                controller: "DashboardCtrl",
                resolve: load('apps/dashboard.js')
            })

            .state('app.signin', {
              url: '/signin',
              templateUrl: 'apps/account/signin.html',
              data: { title: 'Sign in' },
              controller: "SigninCtrl",
              resolve: load('apps/account/signin.js')
            })

            .state('app.forgot-pass', {
                url: '/forgot-pass',
                templateUrl: 'apps/account/forgot_pass/forgot_pass.html',
                data : { title: 'Forgot Pass' },
                controller: "ForgotPassCtrl",
                resolve: load('apps/account/forgot_pass/forgot_pass.js')
            })
          ;

        function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q', '$auth', '$state',
                function( $ocLazyLoad, $q, $auth, $state){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }

        function getParams(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
      }
})();
