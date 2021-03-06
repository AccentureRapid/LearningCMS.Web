'use strict';

var config = {
    // global constant config values live here
    ROOT_URL: 'http://www.baidu.com',
    API_URL: '%%API_URL%%'
};

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'restangular'
])

app.constant('config', config)

app.config(['RestangularProvider',function (RestangularProvider) {
  RestangularProvider.setBaseUrl(config.ROOT_URL);
}]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);



