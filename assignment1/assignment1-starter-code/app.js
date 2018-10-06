(function (){
  'use strict';

angular.module('CalculateItems', [])

.controller('CalculateItemsController',function($scope){
$scope.items = "";
$scope.message = "";
$scope.checked= false;

$scope.display = function () {
  var str = $scope.items.split(',');
  var size = str.length ;
console.log(size);
  if(size<=3 && size>1){
    $scope.message="Enjoy!";
    $scope.checked=true;
  }
  else{
    $scope.message="Enter data first";
  }
  if(size>3){
    $scope.message="Too much!";
      $scope.checked=false;
  }



}
});
})();
