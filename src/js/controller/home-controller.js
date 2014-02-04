define(
  [
    'angular'
  ],
  function(angular) {
    'use strict';

    angular
      .module('ngbp.controllers', ['ngbp'])
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