(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $state, getAPI) {

    $scope.encounters = {};

    getAPI.getEncounters().then(function(response){
      $scope.encounters = response.data.encounters;
    }, function(error){
      //add error handling
    });

    $scope.reportEncounters = function($event){
      event.preventDefault();
      $state.go('report');
    };
  }

})();
