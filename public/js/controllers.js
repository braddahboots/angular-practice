var myApp = angular.module('myApp');

// what ever the dependency is, angular will inject it within the function argument
// the 2nd argumnet that is passed through controller is an array made of string values that represent the dependencies within the function callback
myApp.controller('myController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'Movies',
  function($scope, mainCharacter, CharacterVersionFactory, Movies) {

}]);