var yagoPageControllers = angular.module('yagoPageControllers', []);

yagoPageControllers.controller('VideoController', ['$scope', '$http', function($scope, $http) {
  // the following http request will slow down scope.videos loading,
  // but scope.$watch inside of masonry directive will handle it
  $http.get('js/data.json').success(function(data) {
    $scope.videos = data;
  });
  $scope.name = "Yago";
  $scope.contrName = "Video";
}]);

yagoPageControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "Yago";
  $scope.contrName = "About";
}]);

// yagoPageControllers.controller('ContactsController', ['$scope', '$http', function($scope, $http) {
//   $scope.name = "Yago";
//   $scope.contrName = "Contacts";
// }]);