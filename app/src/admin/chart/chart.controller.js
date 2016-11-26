/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .controller('ChartController', function ($scope, TableHangHoa,DataTable,ProductService) {
        //fetch data category
        ProductService.fetchCategory()
            .then(function (response) {
                $scope.categories = response.data;
                console.log($scope.categories);
            })
            .catch(function (err) {
               alert('Khong load duoc category' + {message:err});
            });
        //fetch data từ user
        ProductService.fetchUser()
            .then(function (response) {
                $scope.users = response.data;
                console.log($scope.users);
            })
            .catch(function (err) {
                alert('Khong load duoc user' + {message:err});
            });

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.product = data;
            });
        };

        //reset data khi nhập mới
        $scope.addNew = function () {
            $scope.product = {}
        };

        //xóa object
        $scope.delete = function (data) {
            $scope.$apply(function () {
                $scope.product = data;
            });
            ProductService.deleteProduct($scope.product._id)
                .then(function () {
                    alert('Delete Success');
                    angular.element('#product_table').DataTable().ajax.reload(null, false);
                })
                .catch(function (ex) {
                    alert(err.toString())
                })
            ;
        };
        //khi click vào nút save
        $scope.save = function (data) {

            //kiểm tra có id ko,có thì update,ko thì create
            var checkIdExit = ($scope.product._id ) ? ProductService.updateProduct : ProductService.createProduct;

            checkIdExit.call(null, $scope.product)
                .then(function () {
                    alert('Success');
                    angular.element('#productModal').modal('hide');
                    angular.element('#product_table').DataTable().ajax.reload(null, false);

                })
                .catch(function (err) {
                    alert("Data is invalid");
                    console.log(err.toString);
                })
        };
        
        
        
        TableHangHoa.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
        
        $scope.refeshPage = function () {
            $router.reload();
        };

        var loadProduct = function () {
            var options = {
                url: 'http://localhost:8081/product/fetch',
                columns: [
                    {'title': 'Id', 'data': '_id'},
                    {'title': 'Code', 'data': 'code'},
                    {'title': 'Name', 'data': 'name'},
                    {'title': 'Price', 'data': 'price'},
                    {'title': 'Category Code', 'data': 'category.code', "defaultContent": "Not available"},
                    {'title': 'Category Name', 'data': 'category.name', "defaultContent": "Not available"},
                    {'title': 'User Name', 'data': 'user.username', "defaultContent": "Not available"},
                    {'title': 'Password', 'data': 'user.password', "defaultContent": "Not available"},
                    {'title': 'Create Date', 'data': 'createdAt', "defaultContent": "Not available"},
                    {'title': 'Modifined Date', 'data': 'updatedAt', "defaultContent": "Not available"},
                    {'title': 'Action', 'data': null}
                ],
                columnDefs: [
                    {
                        "render": function (data, type, row) {
                            return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                                + '<button class="btn btn-info"   id="btn-edit"  ' +
                                'data-toggle="modal" data-target="#productModal" data-whatever="@mdo">' +
                                '<i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                        },
                        "targets": 10
                    }
                ]
            };

            options.delete = function (data) {
                $scope.delete(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };

            DataTable.generateDataTable(options, angular.element('#product_table'));
        };
        loadProduct();
    });