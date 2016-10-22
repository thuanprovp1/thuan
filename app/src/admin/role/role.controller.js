angular.module('myApp')
    .controller('RoleController', function ($scope, RoleFactory, DataTable) {

        //factory API
        RoleFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });

        //DataTables
        var options = {
            url: 'http://localhost:8081/role/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Name', 'data': 'name'},
                {'title': 'Last Modified', 'data': 'lastModified',"defaultContent":"Not available"},
                {'title': 'Action', 'data': null}
            ],
            columnDefs: [
                {
                    "render": function (data, type, row) {
                        return '<button class="btn btn-danger" id="btn-delete">Delete</button>'
                            + '<button class="btn btn-info"   id="btn-edit"  >Edit</button>'
                    },
                    "targets": 3    
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#role_table'));

    });