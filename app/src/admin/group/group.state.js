angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('group',{
            parent:'admin',
            url:'/admin/group',
            views:{
                'content@':{
                    templateUrl:'src/admin/group/group.html',
                    controller:'GroupController'
                }
            }
        })
    });