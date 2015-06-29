var yagoPageControllers = angular.module('yagoPageControllers', ['ui.bootstrap']);

yagoPageControllers.controller('VideoController', ['$scope', '$http', '$css', function($scope, $http, $css) {
  // the following http request will slow down scope.videos loading,
  // but scope.$watch inside of masonry directive will handle it
  $http.get('js/data.json').success(function(data) {
    $scope.videos = data;
  });
  $scope.name = "Yegor Taranov";
  $scope.address = "Some Place, 666, Minsk, Belarus"
  $scope.email = "email@email.com";
}]);

yagoPageControllers.controller('CollapseController', function($scope) {
  $scope.isCollapsed = true;
});

yagoPageControllers.controller('AdminController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "Yago";
  $scope.contrName = "Admin";
}]);
