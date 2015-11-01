angular.module('myApp')
.controller('BooksController', ['$scope', 'BookService', function($scope, BookService) {

    $scope.bookService = BookService;

}]);