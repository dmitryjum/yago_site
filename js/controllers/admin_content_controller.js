angular.module('YagoApp').controller('AdminContentController', ['$scope', '$http', 'Video', "$firebaseArray", function($scope, $http, Video, $firebaseArray) {
  // apply admin.js file here as well
  var ref = new Firebase("https://yagobuzzit.firebaseio.com")
  $scope.videos = $firebaseArray(ref);
  $scope.video = new Video();
  $scope.isSubmitting = false;
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
  // Video.query(function(data) {
  //   $scope.videos = data;
  // });
}]);