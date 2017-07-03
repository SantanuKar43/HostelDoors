'use strict';

/**
 * @ngdoc service
 * @name hostelDoorsApp.autoCompleteDataService
 * @description
 * # autocomplete
 * Factory in the App.
 */
angular.module('hostelDoorsApp')
  .factory('autoCompleteDataService', [function() {
    return {
        getSource: function() {
                  let data =  {
                      "Lalu": null,
                      "Shantanu": null,
                      "Sanskriti": null,
                      "Teju":null,
                      "Nibedita": null,
                      "Prapti": null,
                      "Gursheen": null,
                      "Priya":null
                  }
                  let keys = Object.keys(data)

            return keys;
        }
    }
}]);
