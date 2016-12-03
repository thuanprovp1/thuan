/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('AccountController',function ($scope,AccountFactory,$state,AuthService,$rootScope) {
        if(AuthService.isAuthenticated){
            $state.go('home');
        }
        $scope.user = {
            username : '',
            password :''
        };
        $rootScope.login = function () {
            AuthService.login($scope.user);
            console.log(AuthService.isAuthenticated);
        };


        // AccountFactory.fetchAllProducts()
        // .then(function (response) {
        //     $scope.products=response.data;;
        // })
        //     .catch(function () {
        //         $scope.products=[];
        //     });
    });