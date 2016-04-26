'use strict';

/**
 * @ngdoc function
 * @name LBPApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the LBPApp
 */
angular.module('LBPApp')
  .controller('AboutCtrl', function ($scope) {
  
  $scope.map = { center: { latitude: 47.62547, longitude: -122.52447 }, zoom: 16 };

  $scope.map2 = { center: { latitude: 55.78914, longitude: 12.47513 }, zoom: 16 };
  });
