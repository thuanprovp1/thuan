/**
 * Created by Huong on 16/9/2016.
 */
angular.module('myApp')
    .service('DataTable', function () {
        this.generateDataTable = function (options, element) {
            var table = element.DataTable({
                'ajax': options.url,
                'columns': options.columns,
                'columnDefs': options.columnDefs
            });
            element.on('click', '#btn-delete', function () {
                var obj = table.row($(this).parents('tr')).data();
                alert('Delete ' +obj.name);
            });
            element.on('click', '#btn-edit', function () {
                var obj = table.row($(this).parents('tr')).data();
                console.log(obj);
                alert('edit ' + obj.name);
            })
        };
    });