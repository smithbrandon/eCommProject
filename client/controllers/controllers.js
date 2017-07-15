app.controller('welcomeCtrl',['$scope',function($scope){

}]).controller('apparelCtrl',['$scope',function($scope){
    $scope.items = [{
        img: "/img/covalence-store-apparel-09.png",
        title: "Dark Tee",
        price: 15
    },{
        img: "/img/covalence-store-apparel-10.png",
        title: "White Graphic Tee",
        price: 15
    },{
        img: "/img/covalence-store-apparel-11.png",
        title: "Blue Tee",
        price: 15
    },{
        img: "/img/covalence-store-apparel-12.png",
        title: "Graphic Pullover",
        price: 25
    }]
}]).controller('miscCtrl',['$scope',function($scope){
 $scope.items = [{
        img: "/img/covalence-store-misc-14.png",
        title: "Covalence Mug",
        price: 30
    },{
        img: "/img/covalence-store-misc-15.png",
        title: "Front End Sticker",
        price: 5
    },{
        img: "/img/covalence-store-misc-16.png",
        title: "Full Stack Sticker",
        price: 5
    },{
        img: "/img/covalence-store-misc-17.png",
        title: "Aluminum Water Bottle",
        price: 35
    }]
}]).controller('contactCtrl',['$scope',function($scope){

}]).controller('checkoutCtrl',['$scope',function($scope){

}])