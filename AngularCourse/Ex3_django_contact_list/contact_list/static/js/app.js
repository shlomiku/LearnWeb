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
        templateUrl: 'static/templates/partials/contacts.html',
        controller: 'ListCtrl'
    }).
    otherwise({redirectTo: '/'});
}]);

app.controller('ListCtrl', ['$scope', function($scope){
    $scope.contacts = [
        {
            "first": "Shlomi",
            "last": "kushchi",
            "email": "shlomi@somewhere.com"
        },
        {
            "first": "ravid",
            "last": "asher",
            "email": "ravid@somewhere.com"
        }
    ];
    $scope.fShowForm = false;
    $scope.expandInformation = function(elem){
        elem.last = "kushchi";
        console.log("OK");
        console.log(elem);
    };

    $scope.addContactForm = function(){
        console.log("InHere");
        $scope.fShowForm = true;
    };
}]);
