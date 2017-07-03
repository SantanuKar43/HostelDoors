'use strict';

/**
 * @ngdoc directive
 * @name hostelDoorsApp.directive:autoComplete
 * @description
 * # autocomplete
 */
angular.module('hostelDoorsApp')
  .directive('autoComplete', function(autoCompleteDataService,$timeout) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
                // console.log(elem); always use log to check if you can access the element using this directive

            console.log(autoCompleteDataService.getSource()); // factory is working
            $(elem).autocomplete({
                source: autoCompleteDataService.getSource(), //from your service
                minLength: 1,
                select: function (event, selectedItem) {
               // Do something with the selected item, e.g.
                $timeout(function() {
                      $(elem).trigger('input');
                    }, 0);
      }
            });
        }
    };
});
