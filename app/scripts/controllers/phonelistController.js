angular.module('phoneDetail', [])
.controller('phoneDetails', function($scope, $http) {
  $http.get("../../json/json/phones.json")
  .success(function(response) {$scope.names = response;});
 $scope.filterType= ["Newest", "Alphabetical", "Price"];
 //images
 $scope.images=[{image: '../../json/images/phones/motorola-xoom-with-wi-fi.0.jpg'}]
  });
