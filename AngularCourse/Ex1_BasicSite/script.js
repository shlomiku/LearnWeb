/**
 * Created by Admin on 17/01/2016.
 */
var app = angular.module("computer", ["ngRoute"])

// app.config is equal to just putting here .config . remember not to put ; in previous line.
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when("/main", {
        templateUrl: "main.html",
        controller: "MainCtrl"
    });
        //.otherwise({redirectTo: '/main'});
}])
.controller("MainCtrl", [function(){
    console.log("that is progress");
}]);
