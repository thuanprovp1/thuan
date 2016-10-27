angular.module('myApp')
    .controller('UserController', function ($scope, UserFactory, DataTable) {

        //factory API

        UserFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
                console.log($scope.products);

            })
            .catch(function () {
                $scope.products = [];
            });

        //DataTables

        var options = {
            url: 'http://localhost:8081/user/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Username', 'data': 'username'},
                {'title': 'Password', 'data': 'password'},
                {'title': 'Role Id', 'data': 'role_id'},
                {'title': 'Last Modified', 'data': 'lastModified', "defaultContent": "Not available"},
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
        DataTable.generateDataTable(options, angular.element('#user_table'));

    });