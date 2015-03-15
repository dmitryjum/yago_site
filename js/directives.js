var myApp = angular.module('yagoDirectives',['ui.bootstrap']);
myApp.directive('masonry',function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: "partials/masonry.html",
    controller: function($scope, $modal, $log) {
      $scope.items = ['item1', 'item2', 'item3'];
      $scope.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'partials/videoModal.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
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
            itemSelector: '.item'
          })
        }
      })
    }
  }
});

myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});