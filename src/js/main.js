requirejs.config(requirejsConfig);

require([
  'angular',
  'js/app'
], function (angular) {
  angular.bootstrap(document, ['ng-boilerplate']);
});