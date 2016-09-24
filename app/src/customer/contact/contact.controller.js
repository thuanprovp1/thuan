/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('ContactController',function ($scope,ContactFactory) {
        ContactFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data;
            })
            .catch(function () {
                $scope.products=[];
            });
    });