/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .controller('SidebarController', function ($scope, $state, AuthService) {
        // $scope.User = localStorageService.get('user');
        $scope.isAdmin = true;
        console.log($scope.isAdmin );
        $scope.isMod = true;
        console.log($scope.isMod);
        // if(($scope.User).role.name === 'admin'){
        //     $scope.isAdmin = true;
        // }
        // if(($scope.User).role.name === 'mod'){
        //     $scope.isMod = true;
        // }
    });