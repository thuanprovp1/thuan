/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .controller('NavController',function ($scope, $state, AuthService, $rootScope) {
        if (AuthService.isAuthenticated) {
            $state.go('login-admin');
        }
        $rootScope.logout = function () {
            AuthService.logout();
        }
    });