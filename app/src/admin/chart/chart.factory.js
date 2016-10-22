/**
 * Created by Thuan on 10/6/2016.
 */
angular.module('myApp')
    .factory('TableHangHoa', function ($http) {
        var fetchAllProducts=function () {
            return $http.get('http://localhost:8081/product/fetch')
        };
        return {
            fetchAllProducts:fetchAllProducts
        }
    });