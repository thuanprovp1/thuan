/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .controller('LoginAdminController', function ($scope, $state, AuthService) {
        if (AuthService.isAuthenticated()) {
            $state.go('dashboard');
        }
        $scope.user = {
            username: '',
            password: ''
        };
        $scope.login = function () {
            AuthService.login($scope.user);
        }
    });