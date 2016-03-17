(function() {
  'use strict';

  angular
  .module('red')
  .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $rootScope, $state, $cookies, getAPI) {

    //this refers to the colonist JSON object
    $scope.colonist = {};
    //form validation
    $scope.validate = false;

    //first http request function handles success. The second handles error
    //fetch all jobs
    getAPI.getJobs().then(function(response){
      $scope.jobs = response.data.jobs;
    }, function(error){
      //add error handling
    });

    $scope.login = function($event){
      event.preventDefault();

      if($scope.checkinForm.$invalid){
        $scope.validate = true;
      } else {
        getAPI.postColonist($scope.colonist).then(function(response){
          $rootScope.colonist = response.data.colonist;
          //to store the colonist object
          $cookies.putObject('new-colonist', response.data.colonist);
          //$state goes to the state called encounters not the url
          $state.go('encounters');
        }, function(error){
          console.log(error);
          //todo - handle error
        });
      }
    };
  }
})();
