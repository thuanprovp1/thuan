/**
 * Created by Thuan on 11/20/2016.
 */
angular.module('myApp')
    .service('ProductService', function ($http, API_URL) {
        var url = [API_URL, 'product/'].join('');

        this.updateProduct = function (data) {
            return $http.post([url, 'update'].join(''), data)
        };

        this.createProduct = function (data) {
            return $http.post([url, 'create'].join(''), data)
        };

        this.deleteProduct = function (data) {
            return $http.get([url, 'delete?id=', data].join(''))
        };
        this.fetchCategory = function () {
            return $http.get([API_URL,'category/fetch'].join(''))
        };
        this.fetchUser = function () {
            return $http.get([API_URL,'user/fetch'].join(''))
        }
    });