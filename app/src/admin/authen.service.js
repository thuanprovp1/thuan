/**
 * Created by Thuan on 11/27/2016.
 */
angular.module('myApp')
    .factory('AuthService', function ($http, $state, API_URL, $localStorage) {
        var isAuthenticated = false;

        function storeUserToken(token) {
            $localStorage.token = token;
            useToken(token);
        }

        function useToken(token) {
            isAuthenticated = true;
            $http.defaults.headers.common['Authorization'] = token;
        }

        function destroyToken() {
            isAuthenticated = false;
            $http.defaults.headers.common.Authorization = undefined;
            $localStorage.token = undefined;
            $localStorage.user = undefined;
        }

        function loadToken() {
            var token = $localStorage.token;
            if (token) {
                useToken(token);
            }
            else {
                destroyToken();
            }
        }

        var login = function (user) {
            $http.post([API_URL, 'login'].join(''), {
                    username: user.username,
                    password: user.password
                })
                .then(function (response) {
                    isAuthenticated = true;
                    $localStorage.user = response.data.user;
                    storeUserToken(response.data.token);
                    if ($localStorage.user.role.name === 'admin' || $localStorage.user.role.name === 'mod') {
                        $state.go('dashboard');
                    }
                    else {
                        $state.go('home');
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    alert(err.data.message);
                })
        };
        var logout = function () {
            // $http.post([API_URL, 'logout'].join(''), localStorageService.get('user'))
            //     .then(function () {
            //         localStorageService.remove('user');
            //         isAuthenticated = false;
            //     })
            //     .catch(function (err) {
            //         alert(err.toString());
            //     });
            destroyToken();
            $state.go('login-admin');
        };

        loadToken();

        return {
            isAuthenticated: function () {
                return isAuthenticated;
            },
            login: login,
            logout: logout
        }
    });