angular.module('YagoApp').controller('AdminPersonalController', ['$scope', 'Personal',
 function($scope, Personal) {
  // apply admin.js file here as well
  $scope.info = Personal("info");
  $scope.saveInfo = function() {
      $scope.info.$save().then(function() {
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
      });
    };
}]);