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
            SEOService.setSEO({
            title: 'Covalence Student Store',
            image: 'http://' + $location.host() + "/img/covalence-store-home.jpg",
            url: $location.url,
            description: 'Shop the Covalence Student Store for great Merchandise'
        });  
};

}]).controller('productsCtrl', ['$scope','$location','Products', '$route', '$routeParams','cartService','SEOService', function ($scope, $location, Products,$route, $routeParams,cartService,SEOService) {

    //Fix error: rror: [$resource:badcfg] Error in resource configuration for action `get`. Expected response to contain an object but got an array (Request: GET /api/products)

    var item = $routeParams.id;
    $scope.catId = $route.current.$$route.categoryId;
    if($scope.catId === 1){
        $scope.hero = '/img/covalence-store-apparel-hero.jpg';
        Products.query({productid: $scope.catId},function(success){
            $scope.products = success;
        });
        SEOService.setSEO({
            title: 'Covalence Student Store - Apparel',
            image: 'http://' + $location.host() + "/img/covalence-store-apparel-hero.jpg",
            url: $location.url,
            description: 'Shop the Covalence Student Store for great apparel'
        });        
    }else{
        $scope.hero = '/img/covalence-store-misc-hero.jpg';
        $scope.products = Products.query({productid: $scope.catId});
        SEOService.setSEO({
            title: 'Covalence Student Store - Apparel',
            image: 'http://' + $location.host() + "/img/covalence-store-misc-hero.jpg",
            url: $location.url,
            description: 'Shop the Covalence Student Store for great swag'
        });    
    }
    if($routeParams){
        $scope.product = Products.get({id: $routeParams.id},function(success){
            SEOService.setSEO({
                title: 'Covalence Student Store - ' + $scope.product.title,
                image: 'http://' + $location.host() + $scope.product.imageurl,
                url: $location.url,
                description: 'Purchase the Covalence ' + $scope.product.title + " from the student store"
            });   
        });
    }
    $scope.addToCart = function(item){
        cartService.addtoCart(item);
    }
    
}]).controller('contactCtrl', ['$scope', function ($scope) {
        SEOService.setSEO({
                title: 'Covalence Student Store - Contact Us',
                image: 'http://' + $location.host() + '/img/logo-footer.svg',
                url: $location.url,
                description: 'Let us know what you think of the store'
            });
}]).controller('checkoutCtrl', ['$scope','Purchases','cartService', function ($scope,Purchases,cartService) {
    $scope.items = cartService.show();
     SEOService.setSEO({
                title: 'Covalence Student Store - Checkout',
                image: 'http://' + $location.host() + '/img/logo-footer.svg',
                url: $location.url,
                description: 'Puchase some great swag from the Covalence Student Shop'
            });
    
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