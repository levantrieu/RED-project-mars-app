(function() {
  'use strict';

  angular
  .module('red')
  .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $rootScope, $cookies, $state, $filter) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.aliens = {};
    console.log($rootScope.colonist);

    var atype = $scope.aliens.type;

    $http({
      method: 'GET',
      url: ALIENS_GET_URL,

    }).then(function(response){

      $scope.aliens = response.data.aliens;
    }, function(error){
      //add error handling

    });

    //pulling in the colonist id from the $cookies and giving date a value
    $scope.encounters = {
      date: $filter('date')(new Date(), 'yyyy-MM-dd'),
      colonist_id: $cookies.getObject('new-colonist').id,
    };

    $scope.submit = function($event){
      event.preventDefault();
      $state.go('report-filed');
      $state.go('encounters');

      $http({
        method: 'POST',
        url: REPORT_POST_URL,
        data: {'encounter': $scope.encounters},

      }).then(function(response){
        console.log(response);

      }, function(error){
        console.log(error);
        //todo - handle error
      });

    };
  }

})();
