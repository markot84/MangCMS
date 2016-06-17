angular.module('articlesModule',[])
	.service('articlesService', ['$http', function($http) {		
		this.list = function(data){
			return $http({
				    	url: 'actions/articles.php?action=listArticles',
					    method: "GET",
					    params: data
				 	});
		}

		this.get = function(data){
			return $http({
				    	url: 'actions/articles.php?action=getArticle',
					    method: "GET",
					    params: data
				 	});
		}

		this.save = function(data){
			return $http({
				    	url: 'actions/articles.php?action=saveArticle',
					    method: "GET",
					    params: data
				 	});
		}

		this.delete = function(data){
			return $http({
				    	url: 'actions/articles.php?action=deleteArticle',
					    method: "GET",
					    params: data
				 	});
		}
   	}])
	.controller('listArticlesController', ['$scope', 'articlesService', '$mdDialog', '$mdMedia', function ($scope, articlesService, $mdDialog, $mdMedia) {
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
				$scope.articles = response.articles;
				$scope.total = response.total;
   			});
  		};

  		$scope.getArticles();

  		//THE MODAL
		// Appending dialog to document.body to cover sidenav in docs app
	    $scope.showConfirm = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('Are you sure you want to delete this article?')
		          .ok('Ok')
		          .cancel('Cancel');
		    $mdDialog.show(confirm).then(function() {
	      		articlesService.delete({
	      			articleId: $scope.articleId
	      		}).success(function(response){
 					$scope.getArticles();
 				});
		    }, function() {
	      		$scope.getArticles();
		    });
  		};
		//THE MODAL

  		$scope.deleteArticle = function (articleId){
  			$scope.articleId = articleId;
  			$scope.showConfirm();
  		};
 	}])
 	.controller('editArticleController', ['$scope', '$routeParams' , 'articlesService', '$mdDialog', '$mdMedia', function($scope, $routeParams, articlesService, $mdDialog, $mdMedia) {
 		$scope.article = {};
 		$scope.article.title = "";
 		$scope.article.content = "";

 		$scope.articleId = $routeParams.id;
 		$scope.message = {
 			'success' : 'Article saved successfully',
 			'fail' : 'Error while saving the message'
 		};

 		$scope.getArticle = function() {
 			articlesService.get({
 				articleId: $scope.articleId
 			}).success(function(response){
 				$scope.article = response;
 			});
 		}

 		//THE MODAL
		$scope.showAlert = function(ev) {
			$mdDialog.show(
			  		$mdDialog.alert()
					.title($scope.message.success)		   
				    .ok('Close')
				);
		};
		//THE MODAL

		if($scope.articleId > 0){
 			$scope.getArticle();
 		}

 		$scope.saveArticle = function() {
 			articlesService.save({
 				article: $scope.article
 			}).success(function(response){
 				if(response.success){
 					$scope.showAlert();
 				}else{
 					alert($scope.message.fail);
 				}
 			});
 		}
 		
 	}]);