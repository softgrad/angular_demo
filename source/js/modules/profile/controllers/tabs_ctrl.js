(function (define) {
  "use strict";

  define(function () {
    var TabsController = function ($scope) {
      $scope.activeTab = 0;

      $scope.isActiveTab = function (id) {
        return $scope.activeTab === id;
      };

      $scope.setActive = function (id) {
        $scope.activeTab = id;
      };
    };

    return ["$scope", TabsController];
  });
}(define));
