'use strict';

/**
 * @ngdoc overview
 * @name phoneCatalogApp
 * @description
 * # phoneCatalogApp
 *
 * Main module of the application.
 */
angular
  .module('phoneCatalogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageCtrl',

      })
      .when('/about', {
        templateUrl: 'views/phones.html',
        controller: 'PhonestCtrl',

      })
      .otherwise({
        redirectTo: '/'
      });
  });
