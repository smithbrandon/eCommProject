app.factory('Products',['$resource', function($resource){
    return $resource('/api/products/:id');
<<<<<<< HEAD
}])
app.factory('Mail', ['$resource', function($resource) {
    return $resource('/api/mail/:id')
}]);
=======
}]).factory('Purchases',['$resource', function($resource){
    return $resource('/api/purchases/:id');
}])
>>>>>>> c891507b367345f999b9747901ac51f01f81db93
