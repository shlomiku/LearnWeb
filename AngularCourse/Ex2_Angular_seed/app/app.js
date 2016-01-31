'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('photoStore', [
  'ngRoute',
  'photoStore.templates'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    }).
    otherwise({redirectTo: '/templates'});
}]);

