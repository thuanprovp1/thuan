/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('RegisterController',function ($scope,RegisterFactory) {
        RegisterFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data;
                console.log($scope.products);
            })
            .catch(function () {
                $scope.products=[];
            });
    });