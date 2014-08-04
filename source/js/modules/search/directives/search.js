(function (define) {
  "use strict";

  define(function () {
    return function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/search.html'
      };
    };
  });

})(define);
