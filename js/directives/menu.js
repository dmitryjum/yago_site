angular.module('YagoApp').directive('menu', function() {
  return {
    restrict: 'E',
    replace: true,
    template: "<a ng-click=slide('aside')> MENU </a>",
    link: function(scope, element, attrs) {
      scope.slide = function(element) {
        $(element).slideToggle('fast');
      }
    }
  }
})