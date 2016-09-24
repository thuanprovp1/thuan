/**
 * Created by Huong on 15/9/2016.
 */

angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('product',{
            parent:'site',
            url:'/product',
            views:{
                'content@':{
                    templateUrl:'src/customer/product/product.html',
                    controller:'ProductController'
                }
            }
        })
    });