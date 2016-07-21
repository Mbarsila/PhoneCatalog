angular.module('modals',[])
.controller('ModalController', function ($scope, $uibModalInstance){
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
