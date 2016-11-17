/**
 * Created by Huong on 9/9/2016.
 */
angular.module('myApp')
    .controller('ChartController', function ($scope, TableHangHoa,DataTable) {
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
        var options = {
            url: 'http://localhost:8081/product/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Code', 'data': 'code'},
                {'title': 'Name', 'data': 'name'},
                {'title': 'Price', 'data': 'price'},
                {'title': 'Category', 'data': 'category',"defaultContent":"Not available"},
                {'title': 'User', 'data': 'user',"defaultContent":"Not available"},
                {'title': 'Create Date', 'data': 'createdAt',"defaultContent":"Not available"},
                {'title': 'Modifined Date', 'data': 'updatedAt',"defaultContent":"Not available"},
                {'title': 'Action', 'data': null}
            ],
            columnDefs: [
                {
                    "render": function (data, type, row) {
                        return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                            + '<button class="btn btn-info"   id="btn-edit"  ><i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                    },
                    "targets": 8
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#product_table'));
    });