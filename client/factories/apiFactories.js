app.factory('Products',['$resource', function($resource){
    return $resource('/api/products/:id');
}]);