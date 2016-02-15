angular.module('app1', ['ngRoute']);


angular.module('app1').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/articles", {
      templateUrl: 'templates/list.html',
      controller: 'articlesCntrl'
    })
    .when("/articles/new", {
      templateUrl: 'templates/new.html',
      controller: 'articleCntrl'
    })
    .when("/articles/:id/edit", {
      templateUrl: 'templates/edit.html',
      controller: 'articleCntrl'
    })
    .when("/articles/:id", {
      templateUrl: 'templates/show.html',
      controller: 'articleCntrl'
    })
    .otherwise({
      redirectTo: '/articles'
    })

}])