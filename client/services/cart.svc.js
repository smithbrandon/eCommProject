app.service('cartService',['$rootScope',function($rootScope){
    
    var cartItems = [];
    var total = 0;
    $rootScope.cartCnt = 0;
    this.show = function(){
        return cartItems;
    }
    this.getTotal = function(){
        return total;
    }
    this.addtoCart = function(obj){
        cartItems.push(obj);
        $rootScope.cartCnt++;
        total+=obj.price;
    }
    this.removeFromCart = function(obj){
        
        total-=obj.price;
        var pos = cartItems.indexOf(obj);
        cartItems.splice(pos,1);
        $rootScope.cartCnt--;
    }
}])