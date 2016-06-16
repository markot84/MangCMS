<?php
require_once('config.php');

class Article {

	public $id, $title, $content;

	public function __construct($article) {
		$this->id = ($article['id'] ? $article['id'] : null);
		$this->title = $article['title'];
		$this->content = $article['content'];
   	}

	public static function listArticles($order,$limit,$page){
		$database = new Database();

		$offset = ($page-1)*$limit;

		#order by preparation

		$orderStmt = [
			1 => 'title',
			2 => 'content'
		];

		$order_text = $orderStmt[abs($order)];

		($order < 0 ? $order_text.= ' desc' : $order_text .= ' asc');

		#end of order by preparation

		$articles["articles"] = [];

		if($stmt = $database->prepare("SELECT id, title, content FROM articles ORDER BY $order_text LIMIT $limit OFFSET $offset ")) {

			$stmt->execute(); 
			$stmt->bind_result($id,$title,$content);

			while ($stmt->fetch()) {
				$articles["articles"][] =  [
					"id" => $id,
					"title" => $title,
					"content" => $content
				];
					
			}

   			$stmt->close();
		}

		$sql2 = "SELECT SQL_CALC_FOUND_ROWS * FROM articles";
		$total = $database->query($sql2)->num_rows;

		$articles["total"] = $total;

		return $articles;
	}

	public function getArticle($articleId){

		$conn = new mysqli('localhost','root','mk567666','MangCMS');

		$article = [];

		if($stmt = $conn->prepare("SELECT id, title, content FROM articles WHERE id = ?")) {

			$stmt->bind_param("d", $articleId); 
			$stmt->execute(); 
			$stmt->bind_result($id,$title,$content);

			while ($stmt->fetch()) {
				$article = [
					"id" => $id,
					"title" => $title,
					"content" => $content
				];
			}

   			$stmt->close();
		}

		return $article;
	}

	public function saveArticle($article){
		$database = new Database();

		if($article['id']){
			$sql = "UPDATE articles SET title = '$article[title]', content = '$article[content]' WHERE id = $article[id] ";	
		}else{
			$sql = "INSERT INTO articles (title,content) VALUES ('$article[title]','$article[content]')";
		}

		$result = $database->query($sql);

		$response = [
			'success' => ($result ? true : false),
		];

		return $response;
	}

	public function deleteArticle($articleId){
		$database = new Database();

		if($stmt = $database->prepare("DELETE FROM articles WHERE id = ? ")) {

			$stmt->bind_param("d", $articleId); 
			$stmt->execute(); 
   			$stmt->close();

   			$response = [
				'success' => true
			];
		}else{
			$response = [
				'success' => false
			];
		}


		

		return $response;
	}

}