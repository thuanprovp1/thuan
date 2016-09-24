/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('HomeController',function ($scope,IndexFactory) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });

        IndexFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data;
            })
            .catch(function () {
                $scope.products=[];
            });
    });