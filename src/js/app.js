requirejs.config(requirejsConfig);

require(
  [
    'angular',
    'angular-route',
    'js/controller/home-controller'
  ],
  function(angular) {
    'use strict';

    var ngbp = angular.module('ngbp', ['ngRoute', 'ngbp.controllers'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/', {
            controller: 'HomeController',
            templateUrl: 'template/home.html'
          })
          .otherwise({ redirectTo: '/' });
      }]);

    angular.bootstrap(document , ['ngbp']);
  }
);