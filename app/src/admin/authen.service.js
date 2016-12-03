/**
 * Created by Thuan on 11/27/2016.
 */
angular.module('myApp')
    .factory('AuthService', function ($http, $state, API_URL, localStorageService) {
        var isAuthenticated = false;
        var login = function (user) {
            $http.post([API_URL, 'login'].join(''), {
                    username: user.username,
                    password: user.password
                })
                .then(function (response) {
                    localStorageService.set('user', response.data);
                    isAuthenticated = true;


                    let UserLogin = (localStorageService.get('user')).role.name;



                    alert('Login success');
                    if (UserLogin == 'admin') {
                        $state.go('admin')
                    }
                    else if (UserLogin == 'mod') {
                        $state.go('admin')
                    }
                    else {
                        $state.go('home')
                    }

                    // vl thanh nien xoa code
                    console.log(localStorageService.get('user'));
                    console.log(isAuthenticated);

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
            login: login,
            isAuthenticated: isAuthenticated,
            logout: logout
        }
    });