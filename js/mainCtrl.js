angular.module('routerApp').controller('mainCtrl',function($scope, mainService){
  $scope.name = "Scott Hendrickson";
  $scope.testText = "";
  $scope.userInput = "";
  $scope.format = 'M/d/yy h:mm:ss a';
})
