angular.module('YagoApp').controller('AdminPersonalController', ['$scope', 'Personal',
 function($scope, Personal) {
  // apply admin.js file here as well
  $scope.info = Personal("info");
  $scope.isSubmitting = false;
  $scope.saveInfo = function() {
    $scope.isSubmitting = true;
      $scope.info.$save().then(function() {
        $scope.isSubmitting = false;
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
      });
    };
}]);