angular.module('phoneDetail', [])
.controller('phoneDetails', function($scope, $http) {
  $scope.sortColumn='age';
  $http.get("../../json/json/phones.json")
  .success(function(response) {$scope.names = response;});
  });
