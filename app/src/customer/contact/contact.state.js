/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('contact',{
            parent:'site',
            url:'/contact',
            views:{
                'content@':{
                    templateUrl:'src/customer/contact/contact.html',
                    controller:'ContactController'
                }
            }
        })
    });