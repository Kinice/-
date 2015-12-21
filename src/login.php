<?php
	require_once 'conn.php';
	session_start();
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "select * from user where username = '$username' and password = '$password'";
	$result = mysql_query($sql);
	if($row = mysql_fetch_array($result)){
		$_SESSION['username'] = $username;
		header("Location: /HelpHomework/views/mainPage.html");
	}else{
		header("Location: /HelpHomework/views/index.html");
	}
	echo $con;
?>