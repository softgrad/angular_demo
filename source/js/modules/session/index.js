(function (define) {
  "use strict";

  define([
      'angular',
      'modules/session/api_key_storage',
      'modules/session/session',
      'modules/session/application_ctrl'
    ],
    function (angular, ApiKeyStorage, Session, ApplicationController) {
      var moduleName = "session";

      angular
        .module(moduleName, [])
        .constant('AUTH_EVENTS', {
          loginSuccess: 'auth-login-success',
          loginFailed: 'auth-login-failed',
          logoutSuccess: 'auth-logout-success'
        })
        .factory('ApiKeyStorage', ApiKeyStorage)
        .service('Session', Session)
        .controller('ApplicationController', ApplicationController);

      return moduleName;
    });

}(define));
