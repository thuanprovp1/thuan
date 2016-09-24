/**
 * Created by Huong on 16/9/2016.
 */
// angular.module('myApp')
//     .service('IndexService',function ($http) {
//         this.fetchAllProducts=function () {
//             return $http.get('http://demo8381638.mockable.io/api/product/fetch/all')
//         }
//     });
angular.module('myApp')
    .factory('ContactFactory', function ($http) {
       var fetchAllProducts=function () {
           return $http.get('http://demo8381638.mockable.io/api/product/fetch/all')
       };
        return {
            fetchAllProducts:fetchAllProducts
        }
    });