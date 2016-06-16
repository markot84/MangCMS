var sampleApp = angular.module('MangCMS', ['ngRoute','ngMaterial','sideNav','articlesModule','imagesPage','md.data.table','modal']);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/articles', {
        templateUrl: 'pages/articles.html',
        controller: 'listArticlesController'
    }).
      when('/images', {
        templateUrl: 'pages/images.html',
        controller: 'listImagesController'
    }).
      when('/edit/article/:id',{
        templateUrl: 'pages/editArticle.html',
        controller: 'editArticleController'
    }).
      when('/add/article',{
        templateUrl: 'pages/editArticle.html',
        controller: 'editArticleController'
    }).
      otherwise({
        redirectTo: '/articles'
    })
}]);

sampleApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('purple');
});