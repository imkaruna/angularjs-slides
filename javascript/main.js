angular.module('sliderApp',[])
       .controller('SliderController', function SliderController($scope) {
         $scope.slides  = [
            {id:"image00", src:"http://placekitten.com/g/1000/400", description:"Description for image 00"},
            {id:"image01", src:"http://placekitten.com/1000/400", description:"Description for image 01"},
            {id:"image02", src:"http://placekitten.com/g/1000/400", description:"Description for image 02"},
            {id:"image03", src:"http://placekitten.com/1000/400", description:"Description for image 03"}];
         $scope.currentIndex = 0;
         $scope.currentTitle = $scope.slides[$scope.currentIndex].id;
         $scope.currentDescription = $scope.slides[$scope.currentIndex].description;
         $scope.setCurrentSlideIndex = function (index) {
              $scope.currentIndex = index;
          };
          $scope.isCurrentSlideIndex = function (index) {
         return $scope.currentIndex === index;
         };
          $scope.nextSlide = function () {
              console.log('prevSlide'+ $scope.slides[$scope.currentIndex].description);
              $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
              $scope.currentDescription = $scope.slides[$scope.currentIndex].description;
              $scope.currentTitle = $scope.slides[$scope.currentIndex].id;
          };

          $scope.prevSlide = function () {
              console.log('nextSlide');
              $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
              $scope.currentDescription = $scope.slides[$scope.currentIndex].description;
              $scope.currentTitle = $scope.slides[$scope.currentIndex].id;
          };
       }
);
