/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('ui',{
            parent:'admin',
            url:'/admin/ui',
            views:{
                'content@':{
                    templateUrl:'src/admin/ui/ui.html',
                    controller:'UiController'
                }
            }
        })
    });