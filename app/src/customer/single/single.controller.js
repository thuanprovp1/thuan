/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('SingleController',function ($scope,SingleFactory,$stateParams,$filter) {
        SingleFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data;
                console.log($scope.products);
                console.log($scope.item= $filter('filter')($scope.products, {id: $stateParams.id})[0]);
            })
            .catch(function () {
                $scope.products=[];
            });

        console.log($stateParams.id);
    });