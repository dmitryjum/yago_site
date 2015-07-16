angular.module('YagoApp').controller('IndexController', ['$scope', 'Personal', '$state',
 function($scope, Personal, $state) {
  Personal("info").$loaded().then(function(data) { $scope.info = data; });
  $scope.background = function() {
    if (this.$current.name === 'root') {
      if ($scope.info.backimage === "") {
        return {'background-color': $scope.info.backcolor}
      } else {
        return {'background-image': 'url(' + $scope.info.backimage + ')' }
      }
    }
  }.bind($state)
}]);