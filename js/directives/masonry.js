angular.module('YagoApp').directive('masonry',function() {
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
            columnWidth: 450,
            gutter: 10,
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