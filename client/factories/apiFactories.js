app.factory('Products',['$resource', function($resrouce){
    return $resource('/api/products/:id');
}]);