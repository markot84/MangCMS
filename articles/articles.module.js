angular.module('articlesPage',[])
	.controller('getArticles', function ($scope){
		$scope.articles = [
			{
				"title" : "Title",
				"content" : "Content"
			},
			{
				"title" : "Title2",
				"content" : "Content2"
			}
		];
	})
	.controller('sampleController', function ($scope) {
		$scope.selected = [];

		$scope.query = {
			order: 'name',
			limit: 5,
			page: 1
		};

		$scope.desserts = [
			{
				"name" : "Profiterole",
				"calories" : "340",
				"fat" : "3",
				"carbs" : "4",
				"protein" : "5",
				"sodium" : "6",
				"calcium" : "7",
				"iron" : 8
			},
			{
				"name" : "Sou",
				"calories" : "340",
				"fat" : "3",
				"carbs" : "4",
				"protein" : "5",
				"sodium" : "6",
				"calcium" : "7",
				"iron" : 84
			}
		];

});