<?php
require_once('config.php');

class Image {

	public $id, $title, $content;

	public function __construct($article) {
		$this->id = ($article['id'] ? $article['id'] : null);
		$this->title = $article['title'];
		$this->content = $article['content'];
   	}

	public static function listImages(){
		$database = new Database();

		if($stmt = $database->prepare("SELECT img_path, description FROM images ")) {

			$stmt->execute(); 
			$stmt->bind_result($img_path,$description);

			while ($stmt->fetch()) {
				$images["images"][] =  [
					"img_path" => $img_path,
					"description" => $description
				];		
			}

   			$stmt->close();
		}

		return $images;
	}

}