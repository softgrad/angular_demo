(function (define) {
  "use strict";

  define(function () {
    var GravatarController = function ($scope) {
      $scope.email = "";
    };

    return ["$scope", GravatarController];
  });
}(define));
