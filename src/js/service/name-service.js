define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('name-service', [])
      .factory('NameService', function() {
        return {
          name: ''
        }
      });
  }
);

