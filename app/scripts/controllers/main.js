'use strict';

/**
 * @ngdoc function
 * @name translateMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateMeApp
 */
angular.module('translateMeApp')
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
  });