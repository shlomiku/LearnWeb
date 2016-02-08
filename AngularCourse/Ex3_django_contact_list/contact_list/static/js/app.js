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
        templateUrl: 'static/templates/ngviews/contacts.html',
        controller: 'ListCtrl'
    }).
    otherwise({redirectTo: '/'});
}]);

app.controller('ListCtrl', ['$scope', '$http', function($scope, $http){
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

    $scope.master = {firstName:"John", lastName:"Doe"};
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    $scope.submitContact = function(){
        console.log($scope.user.firstName);
        $http.post("/submit/", JSON.stringify({"hello": "to you"}))

    };
}]);
