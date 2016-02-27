(function() {
  'use strict';

  angular
  .module('red')
  .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $rootScope, $http, $state, $cookies) {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    //this refers to the colonist JSON object
    $scope.colonist = {};
    //form validation
    $scope.validate = false;

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

    // $cookies.putObject('new-colonist', undefined);

    $scope.login = function($event){
      event.preventDefault();

      // $scope.checkValid = function() {
      //   if($scope.validate && $scope.checkinForm.length) {
      //     $scope.validate = false;
      //   }
      // };
//       if($scope.newTodo) {
//   $scope.todos.push({ text: $scope.newTodo, completed: false })
// $scope.newTodo = '';
// } else {
//   $scope.validate = true;
// }
// }


      if($scope.checkinForm.$invalid){
        $scope.validate = true;

      } else {

        $http({
          method: 'POST',
          url: COLONIST_POST_URL,
          data: {'colonist': $scope.colonist}

        }).then(function(response){
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
