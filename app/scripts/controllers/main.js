'use strict';

/**
 * @ngdoc function
 * @name LBPApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the LBPApp
 */
angular.module('LBPApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
};
	var todosInStore = localStorageService.get('todos');

	$scope.todos = todosInStore || [];

	$scope.$watch('todos', function () {
	  localStorageService.set('todos', $scope.todos);
	}, true);

	$scope.imagePathLouise = 'images/IMG_1389.jpg';
	$scope.imagePathYannis = 'images/IMG_1388.jpg';
  
  });