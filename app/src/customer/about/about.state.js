/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('about',{
            parent:'site',
            url:'/about',
            views:{
                'content@':{
                    templateUrl:'src/customer/about/about.html',
                    controller:'AboutController'
                }
            }
        })
    });