/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('GroupService', function ($http, API_URL) {
        var url = [API_URL, 'group/'].join('');

        this.updateGroup = function (data) {
            return $http.post([url, 'update'].join(''), data)
        };

        this.createGroup = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteGroup = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
    });