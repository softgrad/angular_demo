(function (define) {
  "use strict";

  define(function () {
    return function () {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
          tabs: '='
        },
        controller: 'TabsController',
        templateUrl: 'templates/tabs.html',
        link: function (scope, element, attrs) {
          scope.tabWidth = element[0].offsetWidth;
        }
      };
    };
  });

})(define);
