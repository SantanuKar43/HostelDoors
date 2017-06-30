'use strict';

/**
 * @ngdoc function
 * @name hostelDoorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hostelDoorsApp
 */
angular.module('hostelDoorsApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



  $(document).ready(function(){
      $('input.autocomplete').autocomplete({
      data: {
          "Lalu": null,
          "Shantanu": null,
          "Sanskriti": null,
          "Teju":null,
          "Nibedita": null,
          "Prapti": null,
          "Gursheen": null,
          "Priya":null
      }
      });
      });
