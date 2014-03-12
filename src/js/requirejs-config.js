var requirejsConfig = {
  baseUrl: 'public/',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.11/angular.min',
      'lib/angular/angular'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.11/angular-route.min',
      'lib/angular-route/angular-route.min'
    ],
    'angular-mocks': 'lib/angular-mocks/angular-mocks'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-mocks': {
      deps: ['angular']
    }
  }
};