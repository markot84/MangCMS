angular.module('authModule',[])
	.factory('authService', ['$http', function($http) {		

		return {
      		isLoggedIn: function() {
      			return false;
      		}
      	};
   	}]);