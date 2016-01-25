'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('photoStore', [
  'ngRoute',
  'photoStore.view1',
  'photoStore.view2',
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
