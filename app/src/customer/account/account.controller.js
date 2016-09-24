/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('AccountController',function ($scope,AccountFactory) {
        AccountFactory.fetchAllProducts()
        .then(function (response) {
            $scope.products=response.data;;
        })
            .catch(function () {
                $scope.products=[];
            });
    });