var app = angular.module('eComm',['ngRoute','ngResource']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl: 'views/welcome.html'
        }).when('/apparel',{
            templateUrl: 'views/products.html',
            controller: 'productsCtrl',
            categoryId: 1
        }).when('/misc',{
            templateUrl: 'views/products.html',
            controller: 'productsCtrl',
            categoryId: 2
        }).when('/contactUs',{
            templateUrl: 'views/contactUs.html',
            controller: 'contactCtrl'
        }).when('/checkout',{
            templateUrl: 'views/checkout.html',
            controller: 'checkoutCtrl'
        }).when('/products/:id',{
            templateUrl: 'views/single_item.html',
            controller: 'productsCtrl'
        }).otherwise({redirectTo: '/'})
}])