
  angular.module('student',[]);
  angular.module('student').controller('BaseCtrl',['$scope',function($scope){
      $scope.things=[{
         name:'soumik',
         college:'NSEC',
         stream:'CSE'
      },{
          name:'shakya',
         college:'RCCIIT',
         stream:'IT'  
      }]     
  }]);
