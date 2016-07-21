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
  'ngTouch',
  'ui.bootstrap',
  'Homepage',
  'PhoneList',
  'phoneDetail',
  'tabs',
  'modals'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/homepage.html',
    controller: 'CarouselCtrl'
  })
  .when('/about', {
    templateUrl: 'views/phones.html',
    controller: 'phoneDetails'
  })
  .when('/phoneDetails/:id', {
    templateUrl: 'views/phoneDetail.html',
    controller: 'tabsctrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
