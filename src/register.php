<?php
	require_once 'conn.php';
	session_start();
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "insert into user(username,password) values('$username','$password')";
	$result = mysql_query($sql);
	if($result){
		$_SESSION['username'] = $username;
		header("Location: /HelpHomework/views/mainPage.html");
	}else{
		echo "error";
	}
?>