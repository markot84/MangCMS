<?php
require_once('config.php');

Class Article {

	public function listArticles($order,$limit,$page){
		$db = new db();
		$conn = $db->dbconnect();

		$offset = ($page-1)*$limit;

		if(abs($order) == 1){
			$order_text = 'title';
		}else if(abs($order) == 2){
			$order_text = 'content';
		}

		if($order<0){
			$order_text .= ' desc';
		}else{
			$order_text .= ' asc';
		}

		$sql = "SELECT id, title, content FROM articles ORDER BY $order_text LIMIT $limit OFFSET $offset";

		$result = $conn->query($sql);

		$sql2 = "SELECT SQL_CALC_FOUND_ROWS * FROM articles LIMIT 0,10";
		$total = $conn->query($sql2)->num_rows;

		$conn->close();

		$articles["total"] = $total;
		$articles["data"] = [];

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		    	array_push($articles["data"],[
		    		"id" => $row["id"],
		    		"title" => $row["title"],
		    		"content" => $row["content"],
		    	]);
		    }
		}

		return $articles;
	}

	public function getArticle($articleId){
		$db = new db();
		$conn = $db->dbconnect();

		$sql = "SELECT id, title, content FROM articles WHERE id = $articleId ";

		$article["data"] = [];

		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		    	$article["data"] = [
		    		"id" => $row["id"],
		    		"title" => $row["title"],
		    		"content" => $row["content"],
		    	];
		    }
		}

		return $article;
	}
}