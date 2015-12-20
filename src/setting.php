<?php
	require_once 'conn.php';
	session_start();
	$username = $_SESSION['username'];
	$sex = $_POST['sex'];
	$nickname = $_POST['nickname'];
	$email = $_POST['email'];
	$sql = "update user set sex = '$sex', nickname = '$nickname', email = '$email' where username = '$username'";
	$result = mysql_query($sql);
	if($result){
		header("Location: /HelpHomework/views/mainPage.html");
	}else{
		header("Location: /HelpHomework/views/settings.html");
	}
?>