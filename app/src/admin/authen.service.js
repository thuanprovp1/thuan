/**
 * Created by Thuan on 11/27/2016.
 */
angular.module('myApp')
    .factory('AuthService',function ($http,$state,API_URL,localStorageService) {
        var isAuthenticated = false;
        var login = function (user, type) {
            $http.post([API_URL,'login'].join(''),{
                username : user.username,
                password : user.password
            })
            .then(function (response) {
                localStorageService.set('user',response.data);
                isAuthenticated = true;
                if(type == 'admin'){
                    $state.go('admin')
                }
            })
                .catch(function (err) {
                    alert(err.toString());
                })
        };
        var logout = function () {
            $http.post([API_URL, 'logout'].join(''), localStorageService.get('user'))
                .then(function () {
                    localStorageService.remove('user');
                    isAuthenticated = false;
                })
                .catch(function (err) {
                    alert(err.toString());
                });
        };
        return {
            isAuthenticated : isAuthenticated,
            login : login,
            logout : logout
        }
    });