(function (define) {
  "use strict";

  define(function () {
    var LoginController = function ($scope) {
      $scope.email = '';
      $scope.password = '';
    };

    return ["$scope", LoginController];
  });
}(define));
