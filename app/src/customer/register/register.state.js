/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('register',{
            parent:'site',
            url:'/register',
            views:{
                'content@':{
                    templateUrl:'src/customer/register/register.html',
                    controller:'RegisterController'
                }
            }
        })
    });