(function() {
    var cdStoreApp = angular.module('cdStore', ['angular.filter']);

    this.cart = [];

    cdStoreApp.controller('headController', function($scope) {
        $scope.stylePath = 'default.css';
        $scope.changePath = function() {
            if($scope.stylePath == 'alternate.css') $scope.stylePath = 'default.css';
            else $scope.stylePath='alternate.css';
        };
    });

    cdStoreApp.controller('cartCtrl', function(){
       this.items = function(){
           return cart;
       };
    });

    cdStoreApp.controller('storeController', function($scope,$http){

        $scope.items = [];

        $scope.prevPage = function(){

        };

        $scope.nextPage = function(){

        };

        $http.get('/rest/store').
            success(function(data) {
                $scope.items = data;
            }).
            error(function() {
                alert("AJAX failed!");
            });

        $scope.addToCart = function(item){
            alert("Add to cart!\n " + item.name);
            cart.push(item);
        };
    });

    cdStoreApp.controller('naviPanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab || 1;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();