angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('group-type',{
            parent:'admin',
            url:'/admin/group-type',
            views:{
                'content@':{
                    templateUrl:'src/admin/group-type/group-type.html',
                    controller:'GrouptypeController'
                }
            }
        })
    });