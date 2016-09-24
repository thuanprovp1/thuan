/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('account',{
            parent:'site',
            url:'/account',
            views:{
                'content@':{
                    templateUrl:'src/customer/account/account.html',
                    controller:'AccountController'
                }
            }
        })
    });