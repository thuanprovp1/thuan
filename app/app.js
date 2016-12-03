'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','LocalStorageModule'])
    .config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('site', {
                views: {
                    'navbar@': {
                        templateUrl: 'resource/nav/nav.html'
                    },
                    'footer1@': {
                        templateUrl: 'resource/footer/footer.html'
                    }
                }
            }
        );
        localStorageServiceProvider
            .setPrefix('shopgiay')
            .setStorageType('sessionStorage')
            .setDefaultToCookie(false)
            .setNotify(true, true);
    })
    .run(function ($rootScope,AuthService,$state) {
        $rootScope.$on('$stateChangeSuccess',function (object,state) {
            // '$stateChangeSuccess',
            console.log(AuthService.isAuthenticated + "app.js");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            if(AuthService.isAuthenticated == false && state.url.indexOf('admin')>0 ){
                $state.go('login-admin');
            }
        });
    });
