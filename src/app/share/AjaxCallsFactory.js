(function() {
  'use strict';

  angular
  .module('red')
  .factory('getAPI', getAPI);

    function getAPI($http) {

      var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
      var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
      var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
      var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
      var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

      return {
        getAliens: function httpGET() {
          return $http({
            method: 'GET',
            url: ALIENS_GET_URL
          });
        },

        getJobs: function httpGET() {
          return $http({
            method: 'GET',
            url: JOBS_GET_URL
          });
        },

        getEncounters: function httpGET() {
          return $http({
            method: 'GET',
            url: ENCOUNTERS_GET_URL
          });
        },

        postReport: function httpPOST(encounters) {
          return $http({
            method: 'POST',
            url: REPORT_POST_URL,
            data: {'encounter': encounters},
          });
        },

        postColonist: function httpPOST(colonist) {
          return $http({
            method: 'POST',
            url: COLONIST_POST_URL,
            data: {'colonist': colonist},
          });
        }
      };
    }
})();
