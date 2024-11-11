angular.module('simpleApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'components/home.html',
                controller: 'HomeController'
            })
            .when('/products', {
                templateUrl: 'components/products.html',
                controller: 'ProductsController'
            })
            .when('/contact', {
                templateUrl: 'components/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })

    // Define controllers for each page
    .controller('HomeController', function($scope) {
        $scope.message = "Welcome to the Home Page!";
    })

    .controller('ProductsController', function($scope) {
        $scope.message = "Check out our Products!";
        $scope.products = [
            { name: "Product 1", price: "$10" },
            { name: "Product 2", price: "$20" },
            { name: "Product 3", price: "$30" }
        ];
    })

    .controller('ContactController', function($scope) {
        $scope.message = "Contact us for more information!";
    });
