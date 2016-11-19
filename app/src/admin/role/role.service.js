/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('RoleService', function ($http, API_URL) {
        var url = [API_URL, 'role/'].join('');

        this.updateRole = function (data) {
            return $http.post([url, 'update'].join(''), data)
        };

        this.createRole = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteRole = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
    });