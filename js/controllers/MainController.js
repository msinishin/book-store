app.controller('MainController',['$scope', function($scope) {
    $scope.title = 'Top Books Readers';
    $scope.promo = 'Top Romantic Books';
    $scope.products = [
        {
            name: 'My Notorious Gentleman',
            price: 19,
            pubdate: new Date('06 Aug 2013'),
            cover: 'img/my-notorious.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Time Thief',
            price: 8,
            pubdate: new Date('17 Mar 2016'),
            cover: 'img/time-thief.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Until You Found Me',
            price:10,
            pubdate: new Date('25 Jan 2015'),
            cover: 'img/until-ufound-me.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Charm Me',
            price:9.99,
            pubdate: new Date('28 Feb 2004'),
            cover: 'img/charm-me.jpg',
            likes:0,
            dislikes: 0
        },
        {
            name: 'Love Storm',
            price:9.99,
            pubdate: new Date('02 Apr 2010'),
            cover: 'img/love-storm.jpg',
            likes:0,
            dislikes: 0
        },
        {
            name: 'A Run For Love',
            price:9.99,
            pubdate: new Date('21 Mar 2004'),
            cover: 'img/precioushearts.jpg',
            likes:0,
            dislikes: 0
        }
    ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
}]);
