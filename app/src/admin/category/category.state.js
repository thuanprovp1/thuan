angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('category',{
            parent:'admin',
            url:'/admin/category',
            views:{
                'content@':{
                    templateUrl:'src/admin/category/category.html',
                    controller:'CategoryController'
                }
            }
        })
    });