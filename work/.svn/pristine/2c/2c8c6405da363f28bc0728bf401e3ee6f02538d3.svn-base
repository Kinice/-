<?php
	require_once 'conn.php';
	session_start();
	$username = $_SESSION['username'];
	$pubtime = $_POST['pubtime'];
	$comtime = date("Y-m-d H:i:s");
	$comment = $_POST['comment'];

	$sql1 = "select * from content where pubtime = '$pubtime'";
	$result1 = mysql_query($sql1);
	$row1 = mysql_fetch_assoc($result1);
	$id = $row1['Id'];
	$sql = "insert into comment(username,comtime,content,comid) values('$username','$comtime','$comment','$id')";
	$result = mysql_query($sql);
	if($result){
		$sqlSelect = "select * from comment where comtime = '$comtime'";
		$resultSelect = mysql_query($sqlSelect);
		$row = mysql_fetch_assoc($resultSelect);
		$json = json_encode($row);
		echo $json;
	}else{
		echo "error";
	}
?>