<?php
require_once('../lib/images.php');

$action = $_GET['action'];

if($action == 'listImages'){
	$articles = Image::listImages();

	print json_encode($articles);
}
?>