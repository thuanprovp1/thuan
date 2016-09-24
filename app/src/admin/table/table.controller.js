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
                {'title': 'Salary', 'data': 'salary'}
            ],
            columnDefs: [
                {
                    "render": function ( data, type, row ) {
                        return data;
                    },
                    "targets": 0
                }
            ]
        };

        DataTable.generateDataTable(options, angular.element('#example'));
    });