(function (define) {
  "use strict";

  define([
      'angular',
      'modules/navigation/directives/navigation',
      'modules/navigation/controllers/navigation_ctrl'
    ],
    function (angular, Navigation, NavigationController) {
      var moduleName = "App.navigation";

      angular.module(moduleName, [])
        .directive('navigation', Navigation)
        .controller('NavigationController', NavigationController);

      return moduleName;
    });


}(define));
