<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$num = $_GET["num"];
	$result = mysql_query(" select * from regyanzheng where sid='$num' ");
	$data = array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$data[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($data);
	mysql_close($getdb);
?>