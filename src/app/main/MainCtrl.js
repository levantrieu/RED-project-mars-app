(function() {
  'use strict';


  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope, $state) {
      this.online = true;

      //$scope.description = 'Angular Seed Application';

      $scope.enter = function($event){
        event.preventDefault();
        $state.go('check-in');
      };
  }



})();
