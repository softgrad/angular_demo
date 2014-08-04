(function (define) {
  "use strict";

  define(function () {
    var FeedController = function ($scope, $rootScope, $records) {
      $rootScope.$watch('query', function (value) {
        $scope.searchText = value;
      });

      $records.fill('feed.json', function (error, data) {
        $scope.feeds = data;
      });
    };

    return ["$scope", "$rootScope", "$records", FeedController];
  });
}(define));
