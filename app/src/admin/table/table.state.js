angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('table',{
            parent:'admin',
            url:'/admin/table',
            views:{
                'content@':{
                    templateUrl:'src/admin/table/table.html',
                    controller:'TableController'
                }
            }
        })
    });