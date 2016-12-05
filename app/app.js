'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','ngStorage'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
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
        $httpProvider.interceptors.push('AuthInterceptor');
    })
    .run(function ($rootScope, AuthService, $state) {
        $rootScope.$on('$stateChangeSuccess', function (object, state) {
            // '$stateChangeSuccess',
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            if (!AuthService.isAuthenticated() && (state.url).indexOf('admin') > 0) {
                $state.go('login-admin');
            }
        });
    });
