<?php
	require_once 'conn.php';
	session_start();
	$username = $_SESSION['username'];
	$sql = "select * from content where username = '$username'";
	$result = mysql_query($sql);
	$array = array();
	if($result){
		while ($row = mysql_fetch_assoc($result)) {
			array_push($array, $row);
		}
		echo json_encode(array_reverse($array));
	}else{
		echo 'error';
	}
?>