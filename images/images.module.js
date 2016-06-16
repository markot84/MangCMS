angular.module('imagesPage',[])
	.service('imagesService', ['$http', function($http) {
		var imagesService = {};
		
		imagesService.list = function(data){
			return $http({
				    	url: 'actions/images.php?action=listImages',
					    method: "GET",
					    params: data
				 	});
		}

	return imagesService;
   	}])
   	.controller('listImagesController', ['$scope', 'imagesService', function ($scope, imagesService) {
   		$scope.images = [];

  		$scope.listImages = function () {
  			imagesService.list({
			}).success(function(response){
				$scope.images = response["images"];
   			});
  		};

  		$scope.listImages();
	}]);