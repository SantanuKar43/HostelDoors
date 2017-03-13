'use strict';

/**
 * @ngdoc overview
 * @name hostelDoorsApp
 * @description
 * # hostelDoorsApp
 *
 * Main module of the application.
 */
angular
  .module('hostelDoorsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: '',
        controllerAs: ''
      })
      .otherwise({
        //redirectTo: '/'
       templateUrl: 'views/404.html',
      });
  });
