angular.module('YagoApp').controller('AdminController', ['$scope', 'Auth', 'currentAuth',
  function($scope, Auth, currentAuth) {
    $scope.auth = Auth;
    $scope.authData = currentAuth
  }])
