(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http, $rootScope) {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    //this refers to the colonist JSON object
    $scope.colonist = {};

    //first http request function handles success. The second handles error
    //fetch all jobs
    $http({
      method: 'GET',
      url: JOBS_GET_URL,

    }).then(function(response){
      $scope.jobs = response.data.jobs;
    }, function(error){
      //add error handling
    });

    $scope.login = function($event){
      event.preventDefault();

      $http({
        method: 'POST',
        url: COLONIST_POST_URL,
        data: {'colonist': $scope.colonist}

      }).then(function(response){
        $rootScope.colonist = response.data;
      }, function(error){
        console.log(error);
        //todo - handle error
      });
    };
  }
})();
