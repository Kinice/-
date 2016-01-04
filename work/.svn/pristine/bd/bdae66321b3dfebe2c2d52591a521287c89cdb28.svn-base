<?php
	require_once 'conn.php';
	session_start();
	$pubtime = $_POST['pubtime'];
	$sql1 = "select good from content where pubtime = '$pubtime'";
	$result1 = mysql_query($sql1);
	if($row = mysql_fetch_array($result1)){
		$good = $row['good'];
		$good = $good + 1;
		$sql2 = "update content set good = '$good' where pubtime = '$pubtime'";
		$result2 = mysql_query($sql2);
		if ($result2) {
			echo "suc";
		}else{
			echo "err";
		}
	}else{
		echo "err";
	}
?>