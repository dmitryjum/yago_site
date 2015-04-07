var myApp = angular.module('yagoDirectives',[]);
myApp.directive('masonry',function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: "partials/masonry.html",
    link: function(scope, element, attrs) {
      scope.$watch('videos', function(oldVal, newVal ) {
        // $watch is watching for scope variables changes on the template
        // and as soon as values are different allows us to run anything
        if (oldVal !== newVal) {
          var container = document.getElementById("container");
          var msnry = new Masonry( container, {
            columnWidth: 200,
            gutter: 3,
            itemSelector: '.item'
          });
          imagesLoaded(container, function() {
            msnry.layout();
          })
        }
      })
    }
  }
});

myApp.directive('fancybox', function ($compile, $http) {
    return {
        restrict: 'A',

        controller: function($scope) {
             $scope.openFancybox = function (url) {

                $http.get(url).then(function(response) {
                    if (response.status == 200) {

                        var template = angular.element(response.data);
                        var compiledTemplate = $compile(template);
                        compiledTemplate($scope);

                        $.fancybox.open({
                         content: template,
                         type: 'html'
                       });
                    }
                });
            };
        }
    };
});

myApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);