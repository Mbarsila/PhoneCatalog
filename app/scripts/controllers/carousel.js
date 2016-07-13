angular.module('Homepage').controller('CarouselCtrl', function ($scope) {
  $scope.slides = [
      {
        image: '../../json/images/phones/dell-streak-7.0.jpg'
      },
      {
        image: '../../json/images/phones/dell-streak-7.1.jpg'
      },
      {
        image: '../../json/images/phones/dell-streak-7.2.jpg'
      },
      {
        image: '../../json/images/phones/dell-streak-7.3.jpg'
      }
    ];
  }
);
