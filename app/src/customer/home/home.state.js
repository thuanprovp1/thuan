/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('home',{
            parent:'site',
            url:'/home',
            views:{
                'content@':{
                    templateUrl:'src/customer/home/home.html',
                    controller:'HomeController'
                }
            }
        })
    });