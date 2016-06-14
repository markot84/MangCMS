<?php
require_once('../lib/articles.php');

$action = $_GET['action'];

if($action == 'listArticles'){
	$order = $_GET['order'];
	$limit = $_GET['limit'];
	$page = $_GET['page'];	

	$article = new Article();
	$articles = $article->listArticles($order,$limit,$page);

	print json_encode($articles);
}
else if($action == 'getArticle'){
	$articleId = $_GET['articleId'];

	$articleObj = new Article();
	$article = $articleObj->getArticle($articleId);

	print json_encode($article);
}



?>