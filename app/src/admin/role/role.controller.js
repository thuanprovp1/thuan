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
                    "targets": 4 
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#role_table'));

    });