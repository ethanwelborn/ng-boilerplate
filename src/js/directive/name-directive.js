define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('name-directive', [])
      .directive('name', function() {
        return {
          restrict: 'E',
          scope: {
            value: '='
          },
          template: '<span class="name">{{ formattedValue }}</span>',
          link: function($scope) {
            $scope.$watch('value', function(value) {
                $scope.formattedValue = value.length ? 'Well ' + value + ',': '';
            });
          }
        };
      });
  }
);