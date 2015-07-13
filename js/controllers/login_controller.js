angular.module('YagoApp').controller('LoginController', ['$scope', '$state', 'Auth',
 function($scope, $state, Auth) {
  $scope.login = {};
  $scope.login = function() {
    var email = $scope.login.email;
    var password = $scope.login.password;
    $scope.authData = null;

    Auth.$authWithPassword({
      email: email,
      password: password
    }).
    then(function(authData) {
      console.log('Authentication successful');
      $state.go('admin.content')
    }, function(error) {
      console.log('Authentication failure');
    });
  }
}]);