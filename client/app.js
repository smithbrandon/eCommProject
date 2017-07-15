var app = angular.module('eComm',['ngRoute','ngResource']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl: 'views/welcome.html',
            controller: 'welcomeCtrl'
        }).otherwise({redirectTo: '/'})
}])