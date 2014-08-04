(function (define) {
  "use strict";

  define(function () {
    var SearchController = function ($scope, $rootScope) {
      $scope.isFilterShow = false;

      $scope.clear = function () {
        $scope.searchText = "";
      };

      $scope.$watch('searchText', function (value) {
        $rootScope.query = value;
      });
    };

    return ["$scope", "$rootScope", SearchController];
  });
}(define));
