angular.module('myApp')
.controller('OtherController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  function($scope, mainCharacter, CharacterVersionFactory) {

    $scope.myFirstName = 'Boots';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory.characterVersion();
  }]);