'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['BlogService', function (BlogService) {

    BlogService.allPosts().getList().then(function(data) {
    $scope.allAccounts = data;
  }   ,function() {
    console.log("There was an error saving");
  });

}]);