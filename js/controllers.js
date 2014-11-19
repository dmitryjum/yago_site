var yagoPageControllers = angular.module('yagoPageControllers', []);

// yagoPageControllers.controller('AppController', ['$scope', '$http', function($scope, $http){}]);

yagoPageControllers.controller('VideoController', ['$scope', '$http', function($scope, $http) {
  // $http.get('js/data.json').success(function(data) {
  //   $scope.videos = data;
  // });
  $scope.videos;
  $scope.name = "Yago";
  $scope.contrName = "Video";
}])
.directive('masonry',["$http", function($http) {
  return {
    restrict: "E",
    transclude: true,
    replace: true,
    templateUrl: 'partials/masonry.html',
    link: function(scope, element, attrs) {
      $http.get('js/data.json').success(function(data) {
        scope.videos = data;
      })
      debugger
    }
  }
}]);

yagoPageControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "Yago";
  $scope.contrName = "About";
}]);

yagoPageControllers.controller('ContactsController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "Yago";
  $scope.contrName = "Contacts";
}]);