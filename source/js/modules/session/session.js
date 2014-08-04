(function (define) {
  "use strict";

  define(function () {
    var Session = function (ApiKeyStorage) {
      this.token = ApiKeyStorage.get() || null;

      this.create = function (token) {
        ApiKeyStorage.set(token);
        this.token = token;
      };
      this.destroy = function () {
        ApiKeyStorage.clear();
        this.token = null;
      };
      return this;
    };

    return ['ApiKeyStorage', Session];
  });
}(define));
