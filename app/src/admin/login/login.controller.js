/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .controller('LoginAdminController', function ($scope, $state, AuthService, $rootScope) {
        if (AuthService.isAuthenticated) {
            $state.go('admin');
        }
        $scope.user = {
            username: '',
            password: ''
        };
        $rootScope.login = function () {
            AuthService.login($scope.user);
            console.log(AuthService.isAuthenticated + "login"); 
        }
    });