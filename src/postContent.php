<?php
	require_once 'conn.php';
	session_start();
	$username = $_SESSION['username'];
	$pubtime = date("Y-m-d H:i:s");
	$content = $_POST['content'];
	$sql = "insert into content(username,pubtime,content) values('$username','$pubtime','$content')";
	$result = mysql_query($sql);
	if($result){
		$sqlSelect = "select * from content where pubtime = '$pubtime'";
		$resultSelect = mysql_query($sqlSelect);
		$row = mysql_fetch_assoc($resultSelect);
		$json = json_encode($row);
		echo $json;
	}else{
		echo "error";
	}
?>