angular.module('YagoApp').controller('VideoController', ['$scope', '$css', 'Video', function($scope, $css, Video) {
  // the following http request will slow down scope.videos loading,
  // but scope.$watch inside of masonry directive will handle it
  $scope.videos = Video;
  $scope.name = "Yago";
  $scope.address = "Some Place, 666, Minsk, Belarus"
  $scope.email = "email@email.com";
}]);