/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('dashboard',{
            parent:'admin',
            url:'/admin/dashboard',
            views:{
                'content@':{
                    templateUrl:'src/admin/dashboard/dashboard.html',
                    controller:'DashboardController'
                }
            }
        })
    });