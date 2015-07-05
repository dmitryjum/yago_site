angular.module('YagoApp').controller('AdminContentController', ['$scope', '$http', 'Video', function($scope, $http, Video) {
  // apply admin.js file here as well
  $scope.name = "Yago";
  $scope.contrName = "AdminContent";
  Video.query(function(data) {
    $scope.videos = data;
  });
  $scope.video = new Video();
}]);