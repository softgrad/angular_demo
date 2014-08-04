(function (define) {
  "use strict";

  define(function () {
    var ApplicationController = function ($rootScope, $scope, $location, $http, $timeout, Session, AUTH_EVENTS) {
      $rootScope.$on('$routeChangeStart', function (event) {
        if (!$rootScope.currentUser) {
          event.preventDefault();
          $location.path('/login');
        }
      });

      $rootScope.currentUser = Session.token;

      $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
        $rootScope.currentUser = Session.token;
      });

      $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
        $rootScope.currentUser = null;
      });

      $rootScope.$on(AUTH_EVENTS.loginFailed, function (e, resp) {
        console.log(resp);
      });

      $rootScope.logout = function () {
        Session.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        $scope.setPathTo('/login');
      };

      $rootScope.login = function (credentials) {
        Session.create("api-key");
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setPathTo('/');
      };

      $scope.isOpen = false;

      $scope.init = function () {
        $timeout($scope.open, 300);
      };

      $scope.open = function () {
        $scope.isOpen = true;
      };

      $scope.close = function () {
        $scope.isOpen = false;
      };

      $scope.setPathTo = function (path) {
        if ($location.path() === path) {
          return false;
        }

        $scope.close();

        $timeout(function () {
          $location.path(path);
        }, 300);
      };
    };

    return [
      '$rootScope',
      '$scope',
      '$location',
      '$http',
      '$timeout',
      'Session',
      'AUTH_EVENTS',
      ApplicationController
    ];
  });
}(define));
