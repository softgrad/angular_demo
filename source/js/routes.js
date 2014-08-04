(function (define) {
  "use strict";

  define([
      'angularRoute'
    ],
    function ($routeProvider) {
      var RouteManager = function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: "templates/feed.html",
            controller: "FeedController"
          })
          .when('/profile', {
            templateUrl: "templates/profile.html",
            controller: "ProfileController"
          })
          .when('/login', {
            templateUrl: "templates/login.html",
            controller: "LoginController"
          });
      };

      return ["$routeProvider", RouteManager];
    });


}(define));
