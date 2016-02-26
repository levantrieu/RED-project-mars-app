(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $rootScope, $cookies, $filter) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.aliens = {};
    console.log($rootScope.colonist);

    $http({
      method: 'GET',
      url: ALIENS_GET_URL,

    }).then(function(response){
      $scope.aliens = response.data.aliens;
    }, function(error){
      //add error handling

      //pulling in the colonist id from the $cookies and giving date a value
      $scope.encounter = {
        colonist_id: $cookies.getObject('new-colonist').id,
        date: $filter('date')(new Date(), 'yyyy-mm-dd' )
      };

    });

    $scope.submit = function($event){
      event.preventDefault();

      $http({
        method: 'POST',
        url: REPORT_POST_URL,
        data: {
          'encounters': $scope.encounters
        },

      }).then(function(response){
        //console.log(colonist);
      }, function(error){
        console.log(error);
        //todo - handle error
      });
    };
  }

})();
