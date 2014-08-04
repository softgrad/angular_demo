(function (define) {
  "use strict";

  define([
      'angular',
      'modules/login/login_ctrl'
    ],
    function (angular, LoginController) {
      var moduleName = "App.login";

      angular.module(moduleName, [])
        .controller('LoginController', LoginController);

      return moduleName;
    });


}(define));
