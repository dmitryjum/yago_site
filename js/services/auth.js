angular.module('YagoApp').factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://yagobuzzit.firebaseio.com");
    return $firebaseAuth(ref)
  }])