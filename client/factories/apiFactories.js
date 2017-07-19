app.factory('Products',['$resource', function($resource){
    return $resource('/api/products/:id');
}]).factory('Purchases',['$resource', function($resource){
    return $resource('/api/purchases/:id');
}])