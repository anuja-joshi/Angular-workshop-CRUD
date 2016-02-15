angular.module('app1')
.controller('articlesCntrl', function($scope, $http){
  $scope.article = {}
  
  $scope.articles = {}
  console.log("inside showList");
  $http.get('http://localhost:3000/articles.json').then( function(response){
    $scope.articles = response.data;
  }, function(response){
    console.log("resquest failed");
  });
  
})