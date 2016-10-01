angular.module('myApp')
    .controller('TableController', function ($scope, TableFactory, DataTable) {
        TableFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function () {
                $scope.products = [];
            });
        var options = {
            url: 'data-json/data.json',
            columns: [
                {'title': 'Name', 'data': 'name'},
                {'title': 'Position', 'data': 'position'},
                {'title': 'Office', 'data': 'office'},
                {'title': 'Extn', 'data': 'extn'},
                {'title': 'Start date', 'data': 'start_date'},
                {'title': 'Salary', 'data': 'salary'},
                {'title': 'Action', 'data': null}
            ],
            columnDefs: [
                {
                    "render": function (data, type, row) {
                        return '<button class="btn btn-danger" id="delete">Delete</button>'
                             + '<button class="btn btn-info"   id="edit"  >Edit</button>'
                    },
                    "targets": 6
                }
            ]
        };

        DataTable.generateDataTable(options, angular.element('#example'));
        options.delete = function (data) {
            scope.delete(data);
        };
        $scope.delete = function (data) {
            alert('delete' + data);
        }
    });