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

}]).controller('productsCtrl', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {


    var item = $routeParams.id;
    $scope.catId = $route.current.$$route.categoryId;

    $scope.items = [{
        id: 9,
        categoryId: 1,
        img: "/img/covalence-store-apparel-09.png",
        title: "Dark Tee",
        price: 15
    }, {
        id: 10,
        categoryId: 1,
        img: "/img/covalence-store-apparel-10.png",
        title: "White Graphic Tee",
        price: 15
    }, {
        id: 11,
        categoryId: 1,
        img: "/img/covalence-store-apparel-11.png",
        title: "Blue Tee",
        price: 15
    }, {
        id: 12,
        categoryId: 1,
        img: "/img/covalence-store-apparel-12.png",
        title: "Graphic Pullover",
        price: 25
    }, {
        id: 14,
        categoryId: 2,
        img: "/img/covalence-store-misc-14.png",
        title: "Covalence Mug",
        price: 30
    }, {
        id: 15,
        categoryId: 2,
        img: "/img/covalence-store-misc-15.png",
        title: "Front End Sticker",
        price: 5
    }, {
        id: 16,
        categoryId: 2,
        img: "/img/covalence-store-misc-16.png",
        title: "Full Stack Sticker",
        price: 5
    }, {
        id: 17,
        categoryId: 2,
        img: "/img/covalence-store-misc-17.png",
        title: "Aluminum Water Bottle",
        price: 35
    }]
    var objPos = $scope.items.map(function (x) {
        console.log(x);
        return x.id;
    }).indexOf(item);
    $scope.singleItem = $scope.items[objPos];
    console.log($scope.singleItem);
}]).controller('contactCtrl', ['$scope', function ($scope) {

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