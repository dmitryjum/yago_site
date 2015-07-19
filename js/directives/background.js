angular.module('YagoApp').directive('background', function (Personal) {
  return {
    restrict: 'A',
    controller: function($scope, Personal, $state) {
      $scope.state = $state;
      Personal("info").$loaded().then(function(data) {
        $scope.data = data;
      })
    },
    link: function(scope, element, attrs) {
      scope.$watch("data", function(element) {
        if (this.state.is("root")) {
          if (this.data.backimage === "") {
            element.css("background-color", this.data.backcolor)
          } else {
            element.css("background-image", "url(" + this.data.backimage + ")")
          }
        }
      }.bind(scope, element))
    }
  }
});