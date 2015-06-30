var myApp = angular.module('myApp', [
  'ui.router',
  'yagoPageControllers',
  'yagoDirectives',
  'ui.bootstrap',
  'door3.css'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.
  state('root', {
    url: "/",
    templateUrl: 'partials/video.html',
    controller: 'VideoController',
    css: 'css/video.css'
  }).
  state('admin', {
    url: "/admin",
    controller: 'AdminController',
    templateUrl: 'partials/admin.html',
    css: 'css/admin.css'
  })
}]);