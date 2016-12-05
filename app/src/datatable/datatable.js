/**
 * Created by Huong on 16/9/2016.
 */
angular.module('myApp')
    .service('DataTable', function ($localStorage) {
        this.generateDataTable = function (options, element) {
            var token = $localStorage.token;

            var table = element.DataTable({
                'ajax': {
                    'url': options.url,
                    'beforeSend': function (xhr) {
                        xhr.setRequestHeader('Authorization', token);
                    }
                },
                'columns': options.columns,
                'columnDefs': options.columnDefs
            });
            element.on('click', '#btn-delete', function () {
                var obj = table.row($(this).parents('tr')).data();
                options.delete.call(null, obj);
            });
            element.on('click', '#btn-edit', function () {
                var obj = table.row($(this).parents('tr')).data();
                options.edit.call(null, obj);
            });

            table.on('order.dt search.dt', function () {
                table.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();

        };
    });