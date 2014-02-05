define(
  [
    'angular'
  ],
  function(angular) {
    'use strict';

    angular
      .module('home-controller', ['ng-boilerplate'])
      .controller('HomeController', [
        '$scope',
        '$http',
        function($scope) {
          $scope.name = 'Ian';
          $scope.site = 'http://www.iankwalter.com';
        }
      ]);
  }
);