'use strict';

/**
 * @ngdoc function
 * @name phoneCatalogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the phoneCatalogApp
 */
angular.module('phoneCatalogApp')
  .controller('PhonesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// angular.module('PhoneList',[])
// .controller('PhoneCtrl',['$scope', '$http', function($scope, $http)
// {
//   $http.get('json/json/phones.json').succes(function(data){
//     $scope.guitarVariable=data;
//   });
// }]);
