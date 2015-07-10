angular.module('YagoApp', [
  'ui.router',
  'ui.bootstrap',
  'door3.css',
  'ngResource',
  'firebase'
]);

angular.module('YagoApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
    templateUrl: 'partials/admin.html',
    css: 'css/admin.css'
  }).
  state('admin.personal', {
    url: "/personal",
    controller: 'AdminPersonalController',
    templateUrl: 'partials/admin_personal.html',
    css: 'css/admin.css'
  }).
  state('admin.content', {
    url: "/content",
    controller: 'AdminContentController',
    templateUrl: 'partials/admin_content.html',
    css: 'css/admin.css'
  })
}]);