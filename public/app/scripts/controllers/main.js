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

            $(".button-collapse").sideNav();


           $scope.residents= [
     {name: 'Lalu Prasad Lenka', Room: '406'},
     {name: 'Sinchan Kumar Mishra', Room: '306'},
     {name: 'Rishav Agarwal', Room: '439'},
     {name: 'Sanskriti Mohapatra', Room: '106'},
     {name: 'Nibedita Behera', Room: '102'},
     {name: 'Tejaswini Jena', Room: '106'},
     {name: 'Tejaswini Behera', Room: '105'},
     {name: 'Nibedita Jena', Room: '105'},
     {name: 'Sanskriti Kar', Room: '104'},
     {name: 'Prapti Panigrahi', Room: '103'},
     {name: 'Sanjay Reddy', Room: '421'},
     {name: 'Aswini Padhi', Room: '421'}
     ]

  });
