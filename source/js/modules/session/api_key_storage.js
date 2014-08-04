(function (define) {
  "use strict";

  define(function () {
    var ApiKeyStorage = function () {
      var STORAGE_ID = 'demoApiKeyStorage';

      return {
        get: function () {
          return localStorage.getItem(STORAGE_ID);
        },

        set: function (key) {
          localStorage.setItem(STORAGE_ID, key);
        },

        clear: function () {
          localStorage.removeItem(STORAGE_ID);
        }
      };
    };

    return [ApiKeyStorage];
  });
}(define));
