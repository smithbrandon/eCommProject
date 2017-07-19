app.factory('Products',['$resource', function($resource){
    return $resource('/api/products/:id');
}])
app.factory('Mail', ['$resource', function($resource) {
    return $resource('/api/mail/:id')

    

}]).factory('Purchases',['$resource', function($resource){
    return $resource('/api/purchases/:id');
}])
