/**
 * Created by Thuan on 10/6/2016.
 */
angular.module('myApp')
    .controller('FormController', function ($scope) {
        $scope.users = [];

        var initUser = function () {
            $scope.user = {
                name: '',
                position: '',
                office: '',
                extn: '',
                startdate: '',
                salary: ''
            };
        };

        $scope.addUser = function () {
            $scope.users.push($scope.user);
            initUser();
            alert('Nhân dữ liệu thành công');
            console.log($scope.users);
        };

        initUser();
    });