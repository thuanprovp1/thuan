/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .controller('DashboardController',function ($scope,DashboardFactory) {
        DashboardFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
    });