(function() {
    var cdStoreApp = angular.module('cdStore', []);


    cdStoreApp.controller('CartCtrl', function(){
       this.items = function(){
           return cart;
       };
    });

    cdStoreApp.controller('StoreController', function(){

        this.types = [
            {type: 'Аудио'},
            {type: 'Видео'}
        ];

        this.items = catalogue;

        this.addToCart = function(item){
            alert("Add to cart!\n " + item.name);
            cart[cart.length] = item;
        };
    });

    cdStoreApp.controller('NaviPanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    this.cart = [
        {
            id: 1,
            name: 'The Ouija Experiment 2',
            type: 'video',
            style:'horror',
            image: "pic/vid1.jpg",
            hot: true
        }
    ];

    this.catalogue = [
        {
            id: 1,
            name: 'The Ouija Experiment 2',
            type: 'video',
            style:'horror',
            image: "pic/vid1.jpg",
            hot: true
        },
        {
            id: 2,
            name: 'Extinction',
            type: 'video',
            style:'horror',
            image: "pic/vid2.jpg"
        },
        {
            id: 3,
            name: 'Can\'t stop the music',
            type: 'video',
            style:'comedy',
            image: "pic/vid3.jpg",
            hot: true
        },
        {
            id: 4,
            name: 'Horsehead',
            type: 'video',
            style:'comedy',
            image: "pic/vid4.jpg"
        },
        {
            id: 5,
            name: 'The Marine 4',
            type: 'video',
            style:'action',
            image: "pic/vid5.jpg",
            hot: true
        },
        {
            id: 6,
            name: 'The Taking',
            type: 'video',
            style:'action',
            image: "pic/vid6.jpg"
        },
        {
            id: 7,
            name: 'Jurassic City',
            type: 'video',
            style:'adventure',
            image: "pic/vid7.jpg",
            hot: true
        },
        {
            id: 8,
            name: 'Results',
            type: 'video',
            style:'adventure',
            image: "pic/vid8.jpg"
        }
    ];

})();