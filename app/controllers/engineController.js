app.controller('engineController', function( $scope, $http, $location, $routeSegment, Page ) {
	$scope.Page = Page;
	$scope.$routeSegment = $routeSegment;

	$scope.activeCollection = 0;

	$scope.toggleCollection = function(collectionId) {
		if ($scope.activeCollection == collectionId) {
			$scope.activeCollection = 0;
		} else {
			$scope.activeCollection = collectionId;
		}
	};

	$scope.collections = [
	
	];
});