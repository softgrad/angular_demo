(function (define) {
  "use strict";

  define(function () {
    return function () {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
          class: '@'
        },
        template: '<div class="{{class}}" ng-transclude></div>'
      };
    };
  });

})(define);
