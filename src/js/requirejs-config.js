var requirejsConfig = {
  baseUrl: '/assets',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.11/angular.min',
      'lib/angular/angular'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.11/angular-route.min',
      'lib/angular-route/angular-route.min'
    ],
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
      'lib/jquery/jquery.min'
    ],
    'bootstrap': [
      '//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min',
      'lib/bootstrap/dist/js/bootstrap.min'
    ]
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'jquery': {
      exports: '$'
    },
    'angular-route': {
      deps: ['angular']
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
};