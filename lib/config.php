<?php

class Database {
	const SERVER_NAME = "localhost";
	const USERNAME = "root";
	const PASSWORD = "mk567666";
	const DB_NAME = "MangCMS";

	protected $conn;

	public function __construct() {
         $this->conn = new mysqli(self::SERVER_NAME,self::USERNAME,self::PASSWORD,self::DB_NAME);
         return $this->conn;
   	}

   	public function query($sql){
   		$result = $this->conn->query($sql);

   		return $result;
   	}

   	public function close(){
   		$this->conn->close();
   	}

   	public function prepare($sql){
   		return $this->conn->prepare($sql);
   	}
}