define(
  [
    'angular',
    'js/service/name-service',
    'js/directive/name-directive'
  ],
  function(angular) {
    'use strict';

    angular
      .module('home-controller', ['ng-boilerplate', 'name-service', 'name-directive'])
      .controller('HomeController', [
        '$scope',
        'NameService',
        function($scope, NameService) {
          $scope.nameService = NameService;
        }
      ]);
  }
);