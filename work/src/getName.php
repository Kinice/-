<?php
	require_once 'conn.php';
	session_start();
	$username = $_SESSION['username'];
	$sql = "select nickname from user where username = '$username'";
	$result = mysql_query($sql);
	if($row = mysql_fetch_assoc($result)){
		foreach ($row as $key => $value) {
			echo $value;
		}
	}else{
		echo 'error';
	}
?>