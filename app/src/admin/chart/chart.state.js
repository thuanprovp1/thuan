/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('chart',{
            parent:'admin',
            url:'/admin/chart',
            views:{
                'content@':{
                    templateUrl:'src/admin/chart/chart.html',
                    controller:'ChartController'
                }
            }
        })
    });