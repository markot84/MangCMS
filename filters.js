angular.module('MangCMS.filters', []).
  filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }.
  filter('isLoggedIn', function( authService ) {
  	return function() {
  		return !authService.isLoggedIn();
  	}
  };
);