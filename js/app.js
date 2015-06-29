var myApp = angular.module('myApp', [
  'ngRoute',
  'yagoPageControllers',
  'yagoDirectives',
  'ui.bootstrap',
  'door3.css'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/video.html',
    css: 'css/video.css'
  }).
  when('/admin', {
    templateUrl: 'partials/admin.html',
    css: 'css/admin.css'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);