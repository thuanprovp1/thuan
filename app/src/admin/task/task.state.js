/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('task', {
            parent: 'admin',
            url: '/admin/task',
            views: {
                'content@': {
                    templateUrl: 'src/admin/task/task.html',
                    controller: 'TaskController'
                }
            }
        })
    });