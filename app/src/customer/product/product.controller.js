/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('ProductController', function ($scope, ProductFactory) {
        ProductFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
    });