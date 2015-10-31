// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
  .config(function() {
    //config
  })
  .run(function() {
    //initialize
  });

// what ever the dependency is, angular will inject it within the function argument
// the 2nd argumnet that is passed through controller is an array made of string values that represent the dependencies within the function callback
myApp.controller('myController', ['$scope', function($scope) {
  $scope.myFirstName = 'Boots';
}]);