app.factory('Products',['$resource', function($resource){
    return $resource('/api/products/:id');
}])
app.factory('Mail', ['$resource', function($resource) {
    return $resource('/api/mail/:id')
<<<<<<< HEAD
    
=======
>>>>>>> 38e917c4a27a0461c342203d26bbf5bfd6c95a2e
}]).factory('Purchases',['$resource', function($resource){
    return $resource('/api/purchases/:id');
}])
