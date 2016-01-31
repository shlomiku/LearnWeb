/**
 * Created by Admin on 24/01/2016.
 */
app = angular.module("photoStore.templates", ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
    }).
        when('/templates/:templateId', {
            templateUrl: 'templates/template-details.html',
            controller: 'TemplateDetailsCtrl'
    })
}]);

app.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('json/templates.json').success(function(response){
        $scope.templates = response;
    });
}]);
app.controller('TemplateDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('json/templates.json').success(function(response){
        $scope.templates = response;
        $scope.templateId = $routeParams.templateId; /*got it from the route provider config*/

    });
}])
