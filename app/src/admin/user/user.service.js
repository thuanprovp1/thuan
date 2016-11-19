/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('UserService', function ($http, API_URL) {
        var url = [API_URL, 'user/'].join('');

        this.updateUser = function (data) {
            return $http.post([url, 'update'].join(''), data)
        };

        this.createUser = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteUser = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
    });