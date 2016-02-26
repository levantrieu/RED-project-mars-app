(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http) {
    var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.encounters = {};

    $scope.reportEncounters = function($event){
      event.preventDefault();
      //$scope.go('report');
    };


    $http({
      method: 'GET',
      url: ENCOUNTERS_GET_URL,

    }).then(function(response){
      $scope.encounters = response.data.encounters;
    }, function(error){
      //add error handling
    });
  }

})();
