'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('site', {
            views: {
                'navbar@': {
                    templateUrl: 'resource/nav/nav.html'
                },
                'footer1@':{
                    templateUrl:'resource/footer/footer.html'
                }
            }
        }
        );
    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    });
