/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('widget',{
            parent:'admin',
            url:'/admin/widget',
            views:{
                'content@':{
                    templateUrl:'src/admin/widget/widget.html',
                    controller:'WidgetController'
                }
            }
        })
    });