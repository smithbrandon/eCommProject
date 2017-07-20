app.controller('navCtrl', ['$scope','$window','$rootScope','$location','cartService','SEOService', function($scope,$window,$rootScope,$location, cartService,SEOService) {
        if($window.innerWidth <= 736){
        $rootScope.mobile = true;
        }else{
            $rootScope.mobile = false;
        }


        angular.element($window).bind('resize', function(){           
            if($window.innerWidth <= 736){
                $rootScope.mobile = true;
            }else{
                $rootScope.mobile = false;
            }
            $rootScope.$apply();
       });    
    $scope.showCart = function(local){
        $scope.shoppingCart = !$scope.shoppingCart;
        if($scope.shoppingCart){
            $scope.items = cartService.show();
            $scope.total = cartService.getTotal();
        }
        if(local){
            $location.path(local);
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

    SEOService.setSEO({
        title: 'Covalence Student Store',
        image: 'http://' + $location.host() + "/img/covalence-store-home.jpg",
        url: $location.url,
        description: 'Shop the Covalence Student Store for great Merchandise'
    }); 

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
    if($routeParams.id){
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

    
}]).controller('contactCtrl', ['$scope', 'Mail', 'SEOService','$location' ,function ($scope, Mail,SEOService,$location) {
    var emailFrom = 'covalence.store@covalence.io';
    var emailTo = ['porter.josh@hotmail.com', 'smith.brandon.e.82@gmail.com'];
    $scope.submitForm = function() {
        var emailContent = $scope.first + ' ' + $scope.last + ' with ' + $scope.company + ' has provided feedback, please respond in the next 24 hours. ' + $scope.first + 'would like to see: ' + $scope.subject + '. ' + 'Their additional thoughts: ' + $scope.thoughts + '. Contact them by email -- ' + $scope.email + ', or by phone -- ' + $scope.phone + '.';
        console.log('Its working');
        var email = new Mail({
            to: emailTo,
            from: emailFrom,
            subject: $scope.subject,
            content: emailContent
        })
        email.$save(function(success) {
            console.log('check email');
        });
    }
    SEOService.setSEO({
        title: 'Covalence Student Store - Contact Us',
        image: 'http://' + $location.host() + '/img/logo-footer.svg',
        url: $location.url,
        description: 'Let us know what you think of the store'
    });
}]).controller('checkoutCtrl', ['$scope','Purchases','SEOService','cartService','$location', 'Mail', function ($scope,Purchases,SEOService, cartService, $location, Mail) {
    $scope.items = cartService.show();
    $scope.total = cartService.getTotal();
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
            amount: $scope.total,
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
    var emailFrom = 'covalence.store@covalence.io';
    $scope.submitForm = function() {
        var purchases = cartService.show();
        var emailContent = 'Thank you ' + $scope.first + ' ' + $scope.last + ' for your purchase with Covalence. We are processing your order: ' + purchases + '. Your items will be shipped to: ' + $scope.address1 + ' ' + $scope.address2 + ', ' + $scope.city + ', ' + $scope.state + ', ' + $scope.zip + ' ' + $scope.country;
        
        var email = new Mail({
            to: $scope.email,
            from: emailFrom,
            subject: "Thank you for your recent purchase.",
            content: emailContent
        })
        email.$save(function(success) {
            console.log('check email');
        });
    }
}])