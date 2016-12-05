/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .controller('NavController',function ($scope, $state, AuthService,$localStorage) {
        $scope.logout = function () {
            AuthService.logout();
            $state.go('login-admin');
        };

        
        if(AuthService.isAuthenticated()){
            $scope.user = $localStorage.user;
            console.log($scope.user);
        }
        else{
            $scope.logout();
        }
    });