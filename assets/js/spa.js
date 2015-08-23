
  angular.module('Student',[]);
  angular.module('Student').controller('BaseCtrl',['$scope','$http',function($scope){
      $http.get('/student').then(funtion(response){
        $scope.things=response.data;          
      });       
  }]);
