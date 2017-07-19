app.controller('navCtrl', ['$scope','$rootScope','$location','cartService', function ($scope,$rootScope,$location, cartService) {

    
    $scope.showCart = function(path){
        $scope.shoppingCart = !$scope.shoppingCart;
        if($scope.shoppingCart){
            $scope.items = cartService.show();
            $scope.total = cartService.getTotal();
        }
        if(path){
            $location.path(path);
        }
    }
    $scope.removeItem = function(item){
        cartService.removeFromCart(item)
    }

    $scope.select = function(item) {
    if (item === $scope.selected) {
        $scope.selected = null;
    } else {
        $scope.selected = item;
    }
};

}]).controller('productsCtrl', ['$scope','Products', '$route', '$routeParams','cartService', function ($scope, Products,$route, $routeParams,cartService) {

    var item = $routeParams.id;
    $scope.catId = $route.current.$$route.categoryId;
    console.log("category id: " + $scope.catId )
    if($scope.catId === 1){
        $scope.hero = '/img/covalence-store-apparel-hero.jpg';
        Products.query({productid: $scope.catId},function(success){
            $scope.products = success;
            console.log($scope.products);
        });
        
    }else{
        $scope.hero = '/img/covalence-store-misc-hero.jpg';
        $scope.products = Products.query({productid: $scope.catId});
    }
    if($routeParams){
        $scope.product = Products.get({id: $routeParams.id});

    }
    $scope.addToCart = function(item){
        cartService.addtoCart(item);
    }
    
}]).controller('contactCtrl', ['$scope', function ($scope) {

}]).controller('checkoutCtrl', ['$scope','Purchases','cartService', function ($scope,Purchases,cartService) {
    $scope.items = cartService.show();
    
    
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#card-field');
    $scope.process = function () {
        stripe.createToken(card,{
            amount: 45,
            address_line1: $scope.address1,
            address_line2: $scope.address2,
            address_city: $scope.city,
            address_state: $scope.state,
            address_country: $scope.country
        }).then(function (result) {
            if (result.error) {
                $scope.error = result.error.message;
                console.log(result.error);
            } else {
                console.log(cartService.getTotal());
                var payment = new Purchases({
                    token: result.token,
                    amount: cartService.getTotal()});
                payment.$save(function(success){
                    console.log('the payment has processed');
                })
            }
        });
    }
}])