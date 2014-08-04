(function (define) {
  "use strict";

  define([
      'angular',
      'modules/search/directives/search',
      'modules/search/directives/filter',
      'modules/search/controllers/search_ctrl'
    ],
    function (angular, Search, Filter, SearchController) {
      var moduleName = "App.search";

      angular.module(moduleName, [])
        .controller('SearchController', SearchController)
        .directive('filter', Filter)
        .directive('search', Search);

      return moduleName;
    });


}(define));
