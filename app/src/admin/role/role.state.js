angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('role', {
            parent: 'admin',
            url: '/admin/role',
            views: {
                'content@': {
                    templateUrl: 'src/admin/role/role.html',
                    controller: 'RoleController'
                }
            }
        });
    });