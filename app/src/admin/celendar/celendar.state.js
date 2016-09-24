/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('celendar',{
            parent:'admin',
            url:'/admin/celendar',
            views:{
                'content@':{
                    templateUrl:'src/admin/celendar/celendar.html',
                    controller:'CelendarController'
                }
            }
        })
    });