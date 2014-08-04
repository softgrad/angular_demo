(function (define) {
  "use strict";

  define([
      'angular',
      'modules/profile/controllers/profile_ctrl',
      'modules/profile/controllers/tabs_ctrl',
      'modules/profile/directives/tabs',
      'modules/profile/directives/tab'
    ],
    function (angular, ProfileController, TabsController, Tabs, Tab) {
      var moduleName = "Api.profile";

      angular
        .module(moduleName, [])
          .controller('ProfileController', ProfileController)
          .controller('TabsController', TabsController)
          .directive('tabset', Tabs)
          .directive('tab', Tab);

      return moduleName;
    });

}(define));
