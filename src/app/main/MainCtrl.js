(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope) {
      this.online = true;
      $scope.description = 'Angular Seed Application';
  }

})();
