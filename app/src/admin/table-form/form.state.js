/**
 * Created by Thuan on 10/6/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('table-form', {
            url: '/admin/table-form',
            views: {
                'content@': {
                    templateUrl: 'src/admin/table-form/form.html',
                    controller: 'FormController'
                }
            }

        })
    });