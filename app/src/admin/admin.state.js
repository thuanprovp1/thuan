/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('admin', {
            views:{
                'navbar@':{
                    templateUrl:'resource-admin/nav/nav.html'
                },
                'footer1@': {
                    templateUrl:'resource-admin/footer/footer.html'
                },
                'side_bar@': {
                    templateUrl:'resource-admin/nav/side-bar.html'
                }
            }
        });
    });