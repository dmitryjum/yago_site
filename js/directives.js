var myApp = angular.module('yagoDirectives',['ui.bootstrap']);
myApp.directive('masonry',function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: "partials/masonry.html",
    controller: function($scope, $modal, $log) {
      $scope.open = function (size, link) {
        var modalInstance = $modal.open({
          templateUrl: 'partials/videoModal.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            link: function () {
              return link;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    },
    controllerAs: "modalCtrl",
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

myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, link, $sce) {

  $scope.video = link;

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

myApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);