(function() {
    var cdStoreApp = angular.module('cdStore', []);

    this.cart = [];

    cdStoreApp.controller('CartCtrl', function(){
       this.items = function(){
           return cart;
       };
    });

    cdStoreApp.controller('StoreController', function($scope,$http){

        $scope.items = [];
        $http.get('/rest/store').
            success(function(data, status, headers, config) {
                $scope.items = data;
            }).
            error(function(data, status, headers, config) {
                alert("AJAX filed!");
            });

        this.addToCart = function(item){
            alert("Add to cart!\n " + item.name);
            cart[cart.length] = item;
        };
    });

    cdStoreApp.controller('NaviPanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab || 1;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();