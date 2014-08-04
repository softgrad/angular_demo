(function (define) {
  "use strict";

  define(['angular'],

    function (angular) {
      var moduleName = "records",
        _get;

      _get = ['$http', '$q',
        function ($http, $q) {
          var baseUrl = this.baseUrl,
            Records, buildUrl;

          Records = function (url) {
            this.all = [];
            this.url = url;
          };

          buildUrl = function (base, url) {
            var _url;

            if (url.substr(-1) === '/') {
              _url = base + url;
            } else if (url.indexOf('.') < 0) {
              _url = base + url + '/';
            } else {
              _url = base + url;
            }

            return _url;
          };

          Records.prototype.fill = function (url, callback) {
            var that = this;
            $http({
              method: 'GET',
              url: buildUrl(that.url, url)
            })
              .success(function (response, status, headers, config) {
                that.all = response;
                if (typeof callback === 'function') {
                  callback(false, response);
                }
              })
              .error(function (response, status, headers, config) {
                callback(new Error(status), response);
              });

            return this;
          };

          return new Records(baseUrl);
        }
      ];

      // get: function (callback) {
      //   return this;
      // },
      // find: function (ids, callback) {
      //   return this;
      // },
      // update: function (id, callback) {
      //   return this;
      // },
      // delete: function (ids, callback) {
      //   return this;
      // },
      // create: function (items, callback) {
      //   return this;
      // }

      angular
        .module(moduleName, [])
        .provider('$records', function () {
          this.baseUrl = null;

          this.setBaseUrl = function (url) {
            this.baseUrl = url;
          };

          this.$get = _get;
        });

      return moduleName;
    });

}(define));
