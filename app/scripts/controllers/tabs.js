angular.module('tabs', ['ngAnimate'])
.controller('tabsctrl', function($scope, $http, $routeParams, $uibModal) {
  $scope.id = $routeParams.id;
  $http.get("json/json/"+ $scope.id+".json")
  .then(function(response) {
    $scope.phone = response.data;
    $scope.setImage($scope.phone.images[0]);
  });

  $scope.setImage= function setImage(imageUrl){
    $scope.imageSrcUrl=imageUrl;
  };
  $scope.setImage($scope.imageSrcUrl);

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/modal.html',
      controller: 'ModalController',
      size: size,
      resolve: {}
    });
  };


  $scope.model = {
    name: 'Tabs'
  };
  // $scope.ok = function () {
  //     $uibModalInstance.close( );
  //   };
  //
  //   $scope.cancel = function () {
  //     $uibModalInstance.dismiss('cancel');
  //   };

});
