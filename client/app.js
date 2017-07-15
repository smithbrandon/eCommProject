var app = angular.module('eComm',['ngRoute','ngResource']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl: 'views/welcome.html',
            controller: 'welcomeCtrl'
        }).when('/apparel',{
            templateUrl: 'views/apparel.html',
            controller: 'apparelCtrl'
        }).when('/misc',{
            templateUrl: 'views/misc.html',
            controller: 'miscCtrl'
        }).when('/contactUs',{
            templateUrl: 'views/contactUs.html',
            controller: 'contactCtrl'
        }).when('/checkout',{
            templateUrl: 'views/checkout.html',
            controller: 'checkoutCtrl'
        }).otherwise({redirectTo: '/'})
}])