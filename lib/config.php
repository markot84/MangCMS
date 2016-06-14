<?php

class db {
	const SERVER_NAME = "localhost";
	const USERNAME = "root";
	const PASSWORD = "mk567666";
	const DB_NAME = "MangCMS";

	public function dbconnect() {
		$conn = new mysqli(self::SERVER_NAME,self::USERNAME,self::PASSWORD,self::DB_NAME);

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 
		
		return $conn;
	}
}