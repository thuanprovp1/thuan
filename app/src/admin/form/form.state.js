/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('form',{
            parent:'admin',
            url:'/admin/form',
            views:{
                'content@':{
                    templateUrl:'src/admin/form/form.html',
                    controller:'FormController'
                }
            }
        })
    });