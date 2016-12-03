/**
 * Created by Thuan on 11/27/2016.
 */
angular.module('myApp')
    .directive('html', function () {
        return {
            restrict: 'E',
            link: function (scope, element) {
                element.niceScroll();
            }
        }
    });