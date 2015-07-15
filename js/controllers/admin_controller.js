angular.module('YagoApp').controller('AdminController', ['$scope', 'Auth', 'currentAuth', '$state',
  function($scope, Auth, currentAuth, $state) {
    $scope.auth = Auth;
    $scope.authData = currentAuth;
    // may need to rewrite it in separate directive
    $scope.isActive = function(state) {
      return this.$current.name === state
    }.bind($state)
  }])
