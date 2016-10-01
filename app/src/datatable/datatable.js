/**
 * Created by Huong on 16/9/2016.
 */
angular.module('myApp')
    .service('DataTable', function () {
        this.generateDataTable = function (options, element) {
            element.dataTable({
                'ajax':options.url,
                'columns':options.columns,
                'columnDefs':options.columnDefs
            });
        };
    });