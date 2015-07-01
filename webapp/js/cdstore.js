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

                //If AJAX failed, we try to use static data
                //this only for test purpose
                $scope.items = [
                    {id:1,name:"Timoratus - Doom",type:"Audio",style:"Metall",image:"pic/aud1.jpg",hot:1},
                    {id:2,name:"Timoratus - Grind",type:"Audio",style:"Metall",image:"pic/aud2.jpg",hot:0},
                    {id:3,name:"WAX - We are wessel",type:"Audio",style:"Alternative",image:"pic/aud3.jpg",hot:1},
                    {id:4,name:"Sufjan Stevens - Epic Fail",type:"Audio",style:"Rock",image:"pic/aud4.jpg",hot:0},
                    {id:5,name:"Toussaint Louie - Louie the free",type:"Audio",style:"Jazz",image:"pic/aud5.jpg",hot:1},
                    {id:6,name:"Red Socks",type:"Audio",style:"Alternative",image:"pic/aud6.jpg",hot:0},
                    {id:7,name:"Sing Revival",type:"Audio",style:"Rock",image:"pic/aud7.jpg",hot:1},
                    {id:8,name:"RHCP - Fail",type:"Audio",style:"Rock",image:"pic/aud8.jpg",hot:0},
                    {id:9,name:"Ouija",type:"Video",style:"Horror",image:"pic/vid1.jpg",hot:1},
                    {id:10,name:"Extinction",type:"Video",style:"Adventure",image:"pic/vid2.jpg",hot:0},
                    {id:11,name:"Cant stop the music",type:"Video",style:"Comedy",image:"pic/vid3.jpg",hot:1},
                    {id:12,name:"HorseHead",type:"Video",style:"Horror",image:"pic/vid4.jpg",hot:0},
                    {id:13,name:"Marine 4",type:"Video",style:"Action",image:"pic/vid5.jpg",hot:1},
                    {id:14,name:"Deborah Logan",type:"Video",style:"Horror",image:"pic/vid6.jpg",hot:0},
                    {id:15,name:"Jurassic City",type:"Video",style:"Adventure",image:"pic/vid7.jpg",hot:1},
                    {id:16,name:"Results",type:"Video",style:"Action",image:"pic/vid8.jpg",hot:0}
                ];
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