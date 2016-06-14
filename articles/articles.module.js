angular.module('articlesModule',[])
	.service('articlesService', ['$http', function($http) {
		var articlesService = {};
		
		articlesService.list = function(data){
			return $http({
				    	url: 'actions/articles.php?action=listArticles',
					    method: "GET",
					    params: data
				 	});
		}

		articlesService.get = function(data){
			return $http({
				    	url: 'actions/articles.php?action=getArticle',
					    method: "GET",
					    params: data
				 	});
		}

	return articlesService;
   	}])
	.controller('listArticlesController', ['$scope', 'articlesService', function ($scope, articlesService) {
   		$scope.selected = [];
   		$scope.query = {
   			order: '1',
    		limit: 5,
    		page: 1
  		};

  		$scope.getArticles = function () {
  			articlesService.list({
   				order: $scope.query.order,
   				limit: $scope.query.limit,
   				page : $scope.query.page,
			}).success(function(response){
				$scope.articles = response.data;
				$scope.total = response.total;
   			});
  		};

  		$scope.getArticles();
 	}])
 	.controller('editArticleController', ['$scope', '$routeParams' , 'articlesService', function($scope, $routeParams, articlesService) {
 		$scope.articleId = $routeParams.id;
 		$scope.messages = {
 			'success' : 'Success'
 		};

 		$scope.getArticle = function() {
 			articlesService.get({
 				articleId: $scope.articleId
 			}).success(function(response){
 				$scope.article = response.data;

 			});
 		}

 		$scope.getArticle();

 		
 	}]);