angular.module('myApp')
    .controller('UserController', function ($scope, UserFactory, DataTable, UserService) {
        //fetch du lieu Role
        UserService.fetchRole()
            .then(function (response) {
                $scope.roles = response.data;
                console.log($scope.roles);
            })
            .catch(function (err) {
                alert('Load role that bai' + {message: err});
            });


        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.user = angular.copy(data);
                $scope.user.role = $scope.user.role._id;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.user = {}
        };


        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.user = data;
            });
            UserService.deleteUser($scope.user._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#user_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(err.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {

            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.user._id ) ? UserService.updateUser : UserService.createUser;

            checkIdExit.call(null, $scope.user)
                .then(function () {
                    alert('Success');
                    angular.element('#userModal').modal('hide');
                    angular.element('#user_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };

        UserFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
        var loadUser = function () {
            var options = {
                url: 'http://localhost:8081/user/fetch',
                columns: [
                    {'title': 'Id', 'data': '_id'},
                    {'title': 'Username', 'data': 'username'},
                    {'title': 'Password', 'data': 'password'},
                    {'title': 'Role Name', 'data': 'role.name', "defaultContent": "Not available"},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    {'title': 'Action', 'data': null}
                ],
                columnDefs: [
                    {
                        "render": function (data, type, row) {
                            return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                                + '<button class="btn btn-info"   id="btn-edit"  ' +
                                'data-toggle="modal" data-target="#userModal" data-whatever="@mdo">' +
                                '<i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                        },
                        "targets": 6
                    }
                ]
            };

            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element('#user_table'));
        };
        loadUser();

    });