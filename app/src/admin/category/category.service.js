/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('CategoryService', function ($http, API_URL) {
        var url = [API_URL, 'category/'].join('');

        this.updateCategory = function (data) {
            console.log(data);
            return $http.post([url, 'update'].join(''), data)
        };

        this.createCategory = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteCategory = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
    });