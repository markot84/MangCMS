angular.module('articlesModule',[])
	.service('articlesService', ['$http', function($http) {
		var articlesService = {};
		
		articlesService.list = function(){
			return $http.get('articles/articles.json');
		}

	return articlesService;
   	}])
	.controller('listArticlesController', ['$scope', 'articlesService', function ($scope, articlesService) {
   		articlesService.list().success(function(response){
   			$scope.articles = response;
   		});

   		$scope.selected = [];
   		$scope.query = {
    		order: 'name',
    		limit: 5,
    		page: 1
  		};

  		function success(articles) {
    		$scope.articles = articles;
  		}

  		$scope.getArticles = function () {
  		};
 	}])
 	.controller('editArticleController', ['$scope', '$routeParams' , function($scope,$routeParams) {
 		$scope.articleId = $routeParams.id;
 	}]);