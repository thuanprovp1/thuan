/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('sidebar',{
            views:{
                'content@':{
                    templateUrl:'resource-admin/nav/side-bar.html',
                    controller:'SidebarController'
                }
            }
        })
    });