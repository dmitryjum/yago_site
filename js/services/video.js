angular.module('YagoApp').factory('Video', function($firebaseArray){
  var ref = new Firebase("https://yagobuzzit.firebaseio.com/videos");
  return $firebaseArray(ref);
});