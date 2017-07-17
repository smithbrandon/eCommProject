app.service('cartService',['$rootScope',function($rootScope){
    this.addtoCart = function(obj){
        $rootScope.cart.push(obj);
    }
    this.removeFromCart(obj){
    }
    this.showCart(){
        console.log($rootScope.cart);
    }
}])