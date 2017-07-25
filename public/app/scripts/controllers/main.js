'use strict';

/**
 * @ngdoc function
 * @name hostelDoorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hostelDoorsApp
 */
angular.module('hostelDoorsApp')
  .controller('MainCtrl', function ($scope) {

           $scope.countries = [
     {name: 'Afghanistan', code: 'AF'},
     {name: 'Aland Islands', code: 'AX'},
     {name: 'Albania', code: 'AL'},
     {name: 'Algeria', code: 'DZ'},
     {name: 'American Samoa', code: 'AS'},
     {name: 'AndorrA', code: 'AD'},
     {name: 'Angola', code: 'AO'},
     {name: 'Anguilla', code: 'AI'},
     {name: 'Antarctica', code: 'AQ'},
     {name: 'Antigua and Barbuda', code: 'AG'},
     {name: 'Argentina', code: 'AR'},
     {name: 'Armenia', code: 'AM'},
     {name: 'Aruba', code: 'AW'},
     {name: 'Australia', code: 'AU'},
     {name: 'Austria', code: 'AT'},
     {name: 'Azerbaijan', code: 'AZ'},
     {name: 'Bahamas', code: 'BS'},
     {name: 'Bahrain', code: 'BH'},
     {name: 'Bangladesh', code: 'BD'},
     {name: 'Barbados', code: 'BB'}
     ]

  });
