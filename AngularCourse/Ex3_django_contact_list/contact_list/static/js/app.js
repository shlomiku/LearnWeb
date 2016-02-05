/**
 * Created by Admin on 04/02/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('contactList', [
    'ngRoute'
    //'contactList.templates'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'static/templates/partials/list.html',
        controller: 'ListCtrl'
    }).
    otherwise({redirectTo: '/templates'});
}]);

app.controller('ListCtrl', ['$scope', function($scope){
    $scope.templates = [
        {
            "name": "hello",
            "price": 9.99,
            "id": 1
        },
        {
            "name": "hello2",
            "price": 19.99,
            "id": 2
        }
    ];
}]);

