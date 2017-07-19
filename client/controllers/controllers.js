app.controller('navCtrl', ['$scope','$location', function ($scope,$location) {

    $scope.showCart = function(path){
        $scope.shoppingCart = !$scope.shoppingCart;
        if(path){
            $location.path(path);
        }
    }
    $scope.select = function(item) {
    if (item === $scope.selected) {
        $scope.selected = null;
    } else {
        $scope.selected = item;
    }

};

}]).controller('productsCtrl', ['$scope','Products', '$route', '$routeParams', function ($scope, Products,$route, $routeParams) {

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

    
}]).controller('contactCtrl', ['$scope', 'Mail', function ($scope, Mail) {
    var emailFrom = 'covalence.store@covalence.io';
    var emailTo = ['porter.josh@hotmail.com', 'smith.brandon.e.82@gmail.com'];
    $scope.submitForm = function() {
        var emailContent = $scope.first + ' ' + $scope.last + ' with ' + $scope.company + ' has provided feedback, please respond in the next 24 hours. ' + $scope.first + ' wants ' + $scope.subject + '. ' + 'Their additional thoughts are ' + $scope.thoughts + '. Contact them by email -- ' + $scope.email + ', or by phone --' + $scope.phone + '.';
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

}]).controller('checkoutCtrl', ['$scope', function ($scope) {
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#card-field');
    $scope.process = function () {
        stripe.createToken(card).then(function (result) {
            if (result.error) {
                $scope.error = result.error.message;
            } else {
                // result.token is the actual token to send to our server
            }
        });
    }
}])