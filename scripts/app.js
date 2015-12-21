'use strict';

angular.module('xyzApp', ['ngResource', 'ngRoute']).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/scheduling', {
      templateUrl: 'views/scheduling/scheduling.html',
      controller: 'SchedulingCtrl',
      controllerAs: 'scheduling'
    })
    .when('/contact', {
      templateUrl: 'views/contact/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
