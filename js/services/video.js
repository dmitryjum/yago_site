angular.module('YagoApp').factory('Video', function($resource){
  return $resource('js/data.json/:id');
});