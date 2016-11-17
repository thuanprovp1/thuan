angular.module('myApp')
    .controller('UserController', function ($scope, UserFactory,DataTable) {
        UserFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });

        var options = {
            url: 'http://localhost:8081/user/fetch',
            columns: [
                {'title': 'Id', 'data': '_id'},
                {'title': 'Username', 'data': 'username'},
                {'title': 'Password', 'data': 'password'},
                {'title': 'Role', 'data': 'role'},
                {'title': 'Create Date', 'data': 'createAt',"defaultContent":"Not available"},
                {'title': 'Modifined Date', 'data': 'updatedAt',"defaultContent":"Not available"},
                {'title': 'Action', 'data': null}
            ],
            columnDefs: [
                {
                    "render": function (data, type, row) {
                        return '<button class="btn btn-danger" id="btn-delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
                            + '<button class="btn btn-info"   id="btn-edit"  ><i class="fa fa-pencil" aria-hidden = "true"></i></button>'
                    },
                    "targets": 6
                }
            ]
        };
        DataTable.generateDataTable(options, angular.element('#user_table'));
    });