var myApp = angular.module('myApp');

// what ever the dependency is, angular will inject it within the function argument
// the 2nd argumnet that is passed through controller is an array made of string values that represent the dependencies within the function callback
myApp.controller('myController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  'Movies',
  function($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) {

  $scope.myFirstName = 'Boots';
  $scope.myModel = 'Ready Player One';
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = CharacterVersionFactory.characterVersion();
  $scope.bookService = BookService;
  $scope.movies = [];
  Movies.getMovies().success(function(movies) {
    console.log(movies);
    $scope.movies = movies;
  });
}]);