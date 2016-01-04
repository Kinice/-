<?php
	require_once 'conn.php';
	$pubtime = $_POST['pubtime'];
	$sql1 = "select * from content where pubtime = '$pubtime'";
	$result1 = mysql_query($sql1);
	$array = array();
	if($row = mysql_fetch_assoc($result1)){
		$id = $row['Id'];
		$sql2 = "select * from comment where comid = '$id'";
		$result2 = mysql_query($sql2);
		if ($result2) {
			while ($row2 = mysql_fetch_assoc($result2)) {
				array_push($array, $row2);
			}
			echo json_encode($array);
		}else{
			echo "err";
		}
	}else{
		echo "err";
	}
?>