/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .controller('SidebarController', function ($scope, $localStorage) {
        // $scope.User = localStorageService.get('user');
        if ($localStorage.user.role.name === 'admin') {
            $scope.isAdmin = true;
            console.log($scope.isAdmin + "admin");
        }
        else if ($localStorage.user.role.name === 'mod') {
            $scope.isMod = true;
            console.log($scope.isMod + "mod");
        }
    });