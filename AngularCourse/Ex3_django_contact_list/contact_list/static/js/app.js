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
    var addFormButtonState = function(){
        $scope.fShowForm = true;
        $scope.fShowPlusButton = false;
    };

    var normalButtonState = function(){
        $scope.fShowForm = false;
        $scope.fShowPlusButton = true;
    };
    var getCurrentUserList = function(){
        $http.get('/user_list').success(function(data){
            $scope.contacts = data;
        });
    };
    getCurrentUserList();
    //$scope.contacts = [
    //    {
    //        "first": "Shlomi",
    //        "last": "kushchi",
    //        "email": "shlomi@somewhere.com"
    //    },
    //    {
    //        "first": "ravid",
    //        "last": "asher",
    //        "email": "ravid@somewhere.com"
    //    }
    //];
    $scope.fShowForm = false;
    normalButtonState();
    $scope.expandInformation = function(elem){
        elem.last = "kushchi";
    };

    $scope.addContactForm = function(){
        addFormButtonState();
    };

    $scope.master = {firstName:"John", lastName:"Doe", email:""};
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();

    $scope.submitContact = function(){
        console.log($scope.user.firstName);
        $http.post("/submit/", JSON.stringify($scope.user))
        $scope.closeForm();
        //$scope.contacts.push(
        //    {
        //        "first": $scope.user.firstName,
        //        "last": $scope.user.lastName,
        //        "email": $scope.user.email
        //    }
        //);
        $scope.reset();
        getCurrentUserList();
    };
    $scope.closeForm = function(){
        normalButtonState();
    };
}]);
