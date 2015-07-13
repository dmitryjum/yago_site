angular.module('YagoApp').controller('AdminContentController', ['$scope', 'Video', "$firebaseArray",
 function($scope, Video, $firebaseArray) {
  // apply admin.js file here as well
  $scope.videos = Video;
  $scope.isSubmitting = false;
  $scope.video = {};
  $scope.addVideo = function(video) {
    $scope.isSubmitting = true;
    $scope.videos.$add({
      description: video.description,
      file: video.file,
      name: video.name,
      video_link: video.video_link
    })
    $scope.isSubmitting = false;
    $scope.video = {};
  }
}]);