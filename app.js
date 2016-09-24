var app = angular.module("napster", ['ngRoute']);


app.config(function($routeProvider, $locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'HomeController'
      })
      .otherwise('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      $locationProvider.html5Mode(true)
});
