define(
  [
    'angular',
    'angular-route',
    'js/controller/home-controller'
  ],
  function(angular) {
    'use strict';

    angular.module('ng-boilerplate', ['ngRoute', 'home-controller'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/', {
            controller: 'HomeController',
            templateUrl: 'public/template/home.html'

          })
          .otherwise({ redirectTo: '/' });
      }]);
  }
);