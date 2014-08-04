(function (define) {
  "use strict";

  define(function () {
    var Navigation = function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/filter.html'
      };
    };

    return Navigation;

  });

})(define);
