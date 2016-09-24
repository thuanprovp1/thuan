/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('messager',{
            parent:'admin',
            url:'/admin/messager',
            views:{
                'content@':{
                    templateUrl:'src/admin/messager/messager.html',
                    controller:'MessagerController'
                }
            }
        })
    });