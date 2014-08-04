(function (define) {
  "use strict";

  define([
      'lib/records',
      'modules/session/index',
      'modules/search/index',
      'modules/navigation/index',
      'modules/gravatar/index',
      'modules/feed/index',
      'modules/login/index',
      'modules/profile/index',
      'routes'
    ],
    function (Records, Session, Search, Navigation, Gravatar, Feed, login, Profile, RouteManager) {
      var app, appName = 'App';

      app = angular
        .module(appName, [
          'ngRoute', Session, Records, Search, Navigation, Gravatar, Feed, login, Profile
        ])
        .config(['$recordsProvider',
          function (RecordsProvider) {
            RecordsProvider.setBaseUrl('http://localhost:9000/build/data/');
          }
        ])
        .config(RouteManager)
        .run(['$http', 'Session',
          function ($http, Session) {
            var getAuthorizationHeader = function (Session) {
              return 'Token ' + Session.token;
            };

            $http.defaults.headers.common.Authorization = getAuthorizationHeader.bind(this, Session);
            $http.defaults.headers.common.Accept = 'application/json';
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http.defaults.transformRequest = function (object) {
              //TODO
              return "email=demo%40example.com&password=demo";
            };
          }
        ]);

      angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);

      return app;
    }
  );

}(define));
