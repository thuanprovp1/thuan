/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('file',{
            parent:'admin',
            url:'/admin/file',
            views:{
                'content@':{
                    templateUrl:'src/admin/file-manager/file-manager.html',
                    controller:'FileController'
                }
            }
        })
    });