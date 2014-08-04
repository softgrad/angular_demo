(function (define) {
  "use strict";

  define(function () {
    var ProfileController = function ($scope) {
      $scope.tabs = [{
        id: 0,
        title: 'Photos'
      }, {
        id: 1,
        title: 'Details'
      }, {
        id: 2,
        title: 'Interests'
      }, {
        id: 3,
        title: 'History'
      }, {
        id: 4,
        title: 'Looking for'
      }];
    };

    return ["$scope", ProfileController];
  });
}(define));
