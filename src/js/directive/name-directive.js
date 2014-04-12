define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('ng-boilerplate.name-directive', ['ng-boilerplate.name-service'])
      .directive('nameFormat', ['NameService', function(NameService) {
        return {
          scope: {
            value: '='
          },
          template: '<span class="name">{{ formattedValue }}</span>',
          link: function($scope) {
            $scope.$watch('value', function(value) {
                $scope.formattedValue = value && value.length ? 'Well ' + NameService.formatName(value) + ',': '';
            });
          }
        };
      }]);
  }
);