<?php
require_once('../lib/articles.php');

$action = $_GET['action'];

if($action == 'listArticles'){
	$order = $_GET['order'];
	$limit = $_GET['limit'];
	$page = $_GET['page'];	
	$articles = Article::listArticles($order,$limit,$page);

	print json_encode($articles);
}
else if($action == 'getArticle'){
	$articleId = $_GET['articleId'];

	$article = Article::getArticle($articleId);

	print json_encode($article);
}
else if($action == 'saveArticle'){
	$article = $_GET['article'];

	$article = json_decode($article,true);

	$response = Article::saveArticle($article);

	print json_encode($response);
}
else if($action == 'deleteArticle'){
	$articleId = $_GET['articleId'];

	$response = Article::deleteArticle($articleId);

	print json_encode($response);
}



?>