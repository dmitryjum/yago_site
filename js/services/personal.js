angular.module('YagoApp').factory("Personal", ["$firebaseObject",
  function($firebaseObject) {
    return function(node) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://yagobuzzit.firebaseio.com");
      var personalRef = ref.child(node);

      // return it as a synchronized object
      return $firebaseObject(personalRef);
    }
  }
]);