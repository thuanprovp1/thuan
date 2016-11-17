angular.module('myApp')
    .controller('GroupController', function ($scope, GroupFactory, DataTable) {

        //factory API
        GroupFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });

        //DataTables
        var options = {
            url: 'http://localhost:8081/group/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Group Type', 'data': 'grouptype'},
                {'title': 'Product Id', 'data': 'product'},
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
                    "targets": 5
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#group_table'));

    });