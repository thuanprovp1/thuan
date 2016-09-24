/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('single',{
            parent:'site',
            url:'/single/id=:id',
            views:{
                'content@':{
                    templateUrl:'src/customer/single/single.html',
                    controller:'SingleController'
                }
            }
        })
    });