angular.module('app1')
.controller('articleCntrl', function($scope, $http, $routeParams, $location){
  $scope.article = {}

  if ($routeParams.id){
    $http.get('http://localhost:3000/articles/' + $routeParams.id + '.json').then(function(response){
      $scope.article = response.data;
    }, function(response){
      alert("some error occured while fetching article");
    })
  }
  
  $scope.submitForm = function(){
    console.log("inside submitForm");
    $http.post('http://localhost:3000/articles.json', {article: $scope.article}).then(
      function(response){
        $scope.article = {};
        alert("created successfully");
      },
      function(response){
        alert("request failed");
      }
    )
  };

  $scope.destroyArticle = function(id){
    console.log(id);
    console.log("inside destroyArticle");
    $http.delete("http://localhost:3000/articles/" + id + ".json").then(function(response){
        alert("destroyed successfully!!");
        $location.path('/#/articles');
      }, function(response){
        alert("destroy failed")
      }
    )
  };

  $scope.updateArticle = function(article){
    console.log("inside updateArticle");
    $http.patch("http://localhost:3000/articles/" + article.id + '.json', {article: article}).then(function(){
      alert("updated successfully!");
    }, function(){
      alert("updation failed");
    })
  }

})