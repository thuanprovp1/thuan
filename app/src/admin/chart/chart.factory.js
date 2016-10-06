/**
 * Created by Thuan on 10/6/2016.
 */
angular.module('myApp')
    .factory('TableHangHoa', function ($http) {
        var fetchAllProducts=function () {
            return $http.get('http://demo8381638.mockable.io/api/product/fetch/all')
        };
        return {
            fetchAllProducts:fetchAllProducts
        }
    });