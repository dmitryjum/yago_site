angular.module('YagoApp').controller('VideoController', ['$scope', '$css', 'Video', 'Personal',
 function($scope, $css, Video, Personal) {
  $scope.videos = Video;
  Personal("info").$loaded().then(function(data) { $scope.info = data; });
  $scope.isCollapsed = true;
}]);