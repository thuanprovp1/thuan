angular.module('myApp')
    .controller('GrouptypeController', function ($scope, DataTable, GroupTypeService, API_URL) {

        //bind dữ liệu từ datatables
        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.grouptype = data;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.grouptype = {}
        };

        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.grouptype = data;
                console.log($scope.grouptype._id);
            });
            GroupTypeService.deleteGroupType($scope.grouptype._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#group_type_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(err.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {
            
            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.grouptype._id ) ? GroupTypeService.updateGroupType : GroupTypeService.createGroupType;
            
            checkIdExit.call(null, $scope.grouptype)
                .then(function () {
                    alert('Success');
                    angular.element('#groupTypeModal').modal('hide');
                    angular.element('#group_type_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };
        //DataTables
        var loadGroupType = function () {
            var options = {
                url: [API_URL, 'group-type/fetch'].join(''),
                columns: [
                    {'title': 'Id','data':null},
                    {'title': 'Code', 'data': 'code', "defaultContent": "Not available"},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    {'title': 'Action', 'data': null}
                ],
                columnDefs: [
                    {
                        "render": function (data, type, row) {
                            return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                                + '<button class="btn btn-info"   id="btn-edit"  data-toggle="modal" data-target="#groupTypeModal" data-whatever="@mdo"><i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                        },
                        "targets": 4
                    },
                ]
            };

            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };

            DataTable.generateDataTable(options, angular.element('#group_type_table'));
        };
        loadGroupType();
    });