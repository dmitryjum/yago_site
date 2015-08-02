angular.module('YagoApp').controller('VideoController', ['$scope', '$window', '$css', 'Video', 'Personal',
 function($scope, $window, $css, Video, Personal) {
  $scope.videos = Video;
  Personal("info").$loaded().then(function(data) { $scope.info = data; });
  $scope.isCollapsed = true;
  $scope.$on('$viewContentLoaded', function(event) {
    $window.ga('send', 'pageview');
  });
}]);