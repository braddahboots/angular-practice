// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
  .config(function(MoviesProvider) {
    //config
    MoviesProvider.setEndpoint('http://localhost:3000/api/movies');
  })
  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
    //initialize

    $rootScope.APP_VERSION  = APP_VERSION;
  }]);