var sampleApp = angular.module('MangCMS', ['ngRoute','ngMaterial','sideNav','articlesModule','imagesPage','md.data.table','modal','ngCkeditor','MangCMS.filters','authModule']);

angular.module('MangCMS').run(function ($rootScope, $location, authService) { 
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // if route requires auth and user is not logged in
    if ($location.url() != 'login' && !authService.isLoggedIn()) {
      // redirect back to login
      $location.path('/login');
    }
  });
});

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'listArticlesController'
    }).
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
        redirectTo: '/login'
    })
}]);

sampleApp.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('primaryPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': '222222',
    '500': '2EB267',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.definePalette('secondaryPalette', {
    '50': 'ffebee',
    '100': '2EB267',
    '200': 'ef9a9a',
    '300': 'ef9a9a',
    '400': '2EB267',
    '500': '2EB267',
    '600': '2EB267',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': '2EB267',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300','A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('primaryPalette', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class,
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('secondaryPalette', {
      'default': '400', // use shade 200 for default, and keep all other shades the same
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' 
    });
});