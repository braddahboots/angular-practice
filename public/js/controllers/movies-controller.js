angular.module('myApp')
.controller('MoviesController', ['$scope', 'Movies', function($scope, Movies) {

    $scope.movies = [];
    Movies.getMovies().success(function(movies) {
    $scope.movies = movies;
  });

}]);