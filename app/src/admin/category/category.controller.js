angular.module('myApp')
    .controller('CategoryController', function ($scope, CategoryFactory,CategoryService, DataTable) {
        //bind dữ liệu từ datatables
        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.category = data;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.category = {}
        };

        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.category = data;
                console.log($scope.category._id);
            });
            CategoryService.deleteCategory($scope.category._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#category_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(ex.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {

            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.category._id ) ? CategoryService.updateCategory : CategoryService.createCategory;

            checkIdExit.call(null, $scope.category)
                .then(function () {
                    alert('Success');
                    angular.element('#categoryModal').modal('hide');
                    angular.element('#category_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };

        //factory API
        CategoryFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });

        //DataTables
        var loadCategory = function () {

            var options = {
                url: 'http://localhost:8081/category/fetch',
                columns: [
                    {'title': 'Id', 'data': '_id'},
                    {'title': 'Code', 'data': 'code'},
                    {'title': 'Name', 'data': 'name'},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    {'title': 'Action', 'data': null}
                ],
                columnDefs: [
                    {
                        "render": function (data, type, row) {
                            return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                                + '<button class="btn btn-info"   id="btn-edit"  ' +
                                'data-toggle="modal" data-target="#categoryModal" data-whatever="@mdo">' +
                                '<i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                        },
                        "targets": 5
                    }
                ]
            };

            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };

            DataTable.generateDataTable(options, angular.element('#category_table'));
        };
        loadCategory();
    });