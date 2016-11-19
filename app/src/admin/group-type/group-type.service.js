/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('GroupTypeService', function ($http, API_URL) {
        var url = [API_URL, 'group-type/'].join('');

        this.updateGroupType = function (data) {
            console.log(data);
            return $http.post([url, 'update'].join(''), data)
        };

        this.createGroupType = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteGroupType = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
    });