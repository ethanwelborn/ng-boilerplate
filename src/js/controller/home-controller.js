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
        function($scope, $http) {
          $scope.name = 'Ian';
        }
      ]);
  }
);