var yagoApp = angular.module('YagoApp', [
  'ui.router',
  'ui.bootstrap',
  'door3.css',
  'ngResource',
  'firebase'
]);

yagoApp.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("/");
    };
  });
}]);

yagoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.
  state('root', {
    url: "/",
    templateUrl: 'partials/video.html',
    controller: 'VideoController',
    css: 'css/video.css',
    resolve: {
      // controller will not be loaded until $waitForAuth resolves
      // Auth refers to our $firebaseAuth wrapper
      "currentAuth": ["Auth", function(Auth) {
        // $waitForAuth returns a promise so the resolve waits for it to complete
        return Auth.$waitForAuth();
      }]
    }
  }).
  state('login', {
    url: "/login",
    controller: 'LoginController',
    templateUrl: 'partials/login.html',
    css: 'css/login.css'
  }).
  state('admin', {
    url: "/admin",
    controller: 'AdminController',
    templateUrl: 'partials/admin.html',
    css: 'css/admin.css',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        // $requireAuth returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return Auth.$requireAuth();
      }]
    }
  }).
  state('admin.personal', {
    url: "/personal",
    controller: 'AdminPersonalController',
    templateUrl: 'partials/admin_personal.html',
    css: 'css/admin.css',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireAuth();
      }]
    }
  }).
  state('admin.content', {
    url: "/content",
    controller: 'AdminContentController',
    templateUrl: 'partials/admin_content.html',
    css: 'css/admin.css',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireAuth();
      }]
    }
  })
}]);