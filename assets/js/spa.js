
  angular.module('student',[]);
  angular.module('student').controller('BaseCtrl',['$scope','$http',function($scope,$http){
      $http.get('/User').success(function(response){
        $scope.things=response;
      })
      
      
//      $scope.things=[{
//         name:'soumik',
//         college:'NSEC',
//         stream:'CSE'
//      },{
//          name:'shakya',
//         college:'RCCIIT',
//         stream:'IT'  
//      }]     
  }]);
