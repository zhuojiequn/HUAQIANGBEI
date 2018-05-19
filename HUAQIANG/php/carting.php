<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$usertable = $_GET['user'];
	$usertable_r = mysql_query(" select * from $usertable");
	$tabler_arr= array();
	for($i=0;$i<mysql_num_rows($usertable_r);$i++){
		$tabler_arr[$i]=mysql_fetch_array($usertable_r,MYSQL_ASSOC);
	}
	echo json_encode($tabler_arr);
	mysql_close($getdb);
?>