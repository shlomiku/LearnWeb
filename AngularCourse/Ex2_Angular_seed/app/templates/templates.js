/**
 * Created by Admin on 24/01/2016.
 */
app = angular.module("photoStore.templates", ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
    })
}]);

app.controller('TemplatesCtrl', ['$scope', function($scope){
    console.log("Success");
    console.log($scope);
}])