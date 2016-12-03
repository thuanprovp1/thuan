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
                alert('Login success');
                if(type == 'admin'){
                    $state.go('admin')
                }

                if(type == 'user'){
                    $state.go('home')
                }

            })
                .catch(function (err) {
                    console.log(err);
                    alert(err.data.message);
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