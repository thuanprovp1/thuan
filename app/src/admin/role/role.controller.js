angular.module('myApp')
    .controller('RoleController', function ($scope, RoleFactory, DataTable,RoleService) {

        //bind dữ liệu từ datatables
        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.role = data;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.role = {}
        };

        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.role = data;
            });
            RoleService.deleteRole($scope.role._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#role_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(err.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {

            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.role._id ) ? RoleService.updateRole : RoleService.createRole;

            checkIdExit.call(null, $scope.role)
                .then(function () {
                    alert('Success');
                    angular.element('#roleModal').modal('hide');
                    angular.element('#role_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };
        
        //factory API
        RoleFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
            
        //DataTables
        var loadRole = function () {
            var options = {
                url: 'http://localhost:8081/role/fetch',
                columns: [
                    {'title': 'Id', 'data': '_id'},
                    {'title': 'Name', 'data': 'name'},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    // {'title': 'Action', 'data': null}
                ]
                // ,
                // columnDefs: [
                //     {
                //         "render": function (data, type, row) {
                //             return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                //                 + '<button class="btn btn-info"   id="btn-edit"  ' +
                //                 'data-toggle="modal" data-target="#roleModal" data-whatever="@mdo">' +
                //                 '<i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                //         },
                //         "targets": 4
                //     }
                // ]
            };


            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };

            DataTable.generateDataTable(options, angular.element('#role_table'));
        };
        loadRole();
    });