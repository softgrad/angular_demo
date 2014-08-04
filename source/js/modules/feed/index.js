(function (define) {
  "use strict";

  define([
      'angular',
      'modules/feed/controllers/feed_ctrl'
    ],
    function (angular, FeedController) {
      var moduleName = "App.feed";

      angular.module(moduleName, [])
        .controller('FeedController', FeedController);

      return moduleName;
    });


}(define));
