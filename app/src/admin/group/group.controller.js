angular.module('myApp')
    .controller('GroupController', function ($scope, GroupFactory, DataTable, GroupService) {
        //factory API
        //fetch du lieu tu grouptype
        GroupService.fetchGroupType()
            .then(function (response) {
                $scope.grouptypes = response.data;
            })
            .catch(function (err) {
                alert(err.toString);
        });

        GroupService.fetchProduct()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function (err) {
                alert(err.toString);
            });
        console.log($scope.grouptype);
        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.group = angular.copy(data);
                $scope.group.product = $scope.group.product._id;
                $scope.group.grouptype = $scope.group.grouptype._id;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.group = {}
        };

        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.group = data;
            });
            GroupService.deleteGroup($scope.group._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#group_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(err.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {
            console.log(data);
            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.group._id ) ? GroupService.updateGroup : GroupService.createGroup;

            checkIdExit.call(null, $scope.group)
                .then(function () {
                    alert('Success');
                    angular.element('#groupModal').modal('hide');
                    angular.element('#group_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };

        // GroupFactory.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products = response.data;
        //     })
        //     .catch(function () {
        //         $scope.products = [];
        //     });

        //DataTables
        var loadGroup = function () {
            var options = {
                url: 'http://localhost:8081/group/fetch',
                columns: [
                    {'title': 'Id', 'data': '_id'},
                    {'title': 'Group Type Code', 'data': 'grouptype.code', "defaultContent": "Not available"},
                    {'title': 'Product Code', 'data': 'product.code', "defaultContent": "Not available"},
                    {'title': 'Product Name', 'data': 'product.name', "defaultContent": "Not available"},
                    {'title': 'Product Price', 'data': 'product.price', "defaultContent": "Not available"},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    {'title': 'Action', 'data': null}
                ],
                columnDefs: [
                    {
                        "render": function (data, type, row) {
                            return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                                + '<button class="btn btn-info"   id="btn-edit"  ' +
                                'data-toggle="modal" data-target="#groupModal" data-whatever="@mdo">' +
                                '<i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                        },
                        "targets": 7
                    }
                ]
            };

            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };

            DataTable.generateDataTable(options, angular.element('#group_table'));
        };
        loadGroup();
    });