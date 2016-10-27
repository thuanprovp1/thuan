angular.module('myApp')
    .controller('GrouptypeController', function ($scope, GrouptypeFactory, DataTable) {

        //factory API
        GrouptypeFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });

        //DataTables
        var options = {
            url: 'http://localhost:8081/group-type/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Barcode', 'data': 'barcode'},
                {'title': 'Last Modified', 'data': 'lastModified',"defaultContent":"Not available"},
                {'title': 'Action', 'data': null}
            ],
            columnDefs: [
                {
                    "render": function (data, type, row) {
                        return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                            + '<button class="btn btn-info"   id="btn-edit"  ><i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                    },
                    "targets": 3
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#group_type_table'));

    });