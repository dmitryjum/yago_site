angular.module('YagoApp').controller('AdminController', ['$scope', 'Auth',
  function($scope, Auth) {
    $scope.auth = Auth;
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    })
  }])
