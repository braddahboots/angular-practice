angular.module('myApp')
.provider('Movies', function() {
  var self = this;

  this.endpoint = '';
  this.setEndpoint = function(endpoint) {
    self.endpoint = endpoint;
  };

  this.$get = ['$http', function($http) {
    return {
      getMovies : function() {
        return $http.get(self.endpoint);
      }
    };
  }];
});