/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('login-admin',{
            url:'/admin/login-admin',
            views:{
                'content@':{
                    templateUrl:'src/admin/login/login.html',
                    controller:'LoginAdminController'
                }
            }
        })
    });