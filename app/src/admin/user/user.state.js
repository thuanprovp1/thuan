angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('user',{
            parent:'admin',                 //thua ke tu admin.state
            url:'/admin/user',              //link ket noi toi thang nay
            views:{
                'content@':{
                    templateUrl:'src/admin/user/user.html',         //ma nguon
                    controller:'UserController'                     //ten controller
                }
            }
        })
    });