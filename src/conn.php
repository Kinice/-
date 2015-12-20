<?php
	$con = mysql_connect("localhost","root","chunxia130608");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }
	mysql_select_db("weibo", $con);
?>