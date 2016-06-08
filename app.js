var sampleApp = angular.module('MangCMS', ['ngRoute','ngMaterial','sideNav','articlesPage','imagesPage','md.data.table']);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/articles', {
        templateUrl: 'pages/articles.html',
        controller: 'getArticles'
    }).
      when('/images', {
        templateUrl: 'pages/images.html',
        controller: 'imagesPageController'
    }).
      otherwise({
        redirectTo: '/articles'
    })
}]);

sampleApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('brown');
});