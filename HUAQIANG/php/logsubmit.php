<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$user = $_GET['user'];
	$password = $_GET['password'];
	$r1 = mysql_query("select * from users where name='$user' ");
	$r2 = mysql_query("select * from users where password='$password' ");
	$result1 = mysql_fetch_array($r1,MYSQL_ASSOC);
	$result2 = mysql_fetch_array($r2,MYSQL_ASSOC);
	$arr= array();
	$arr[0] = $result1;
	$arr[1] = $result2;
	echo json_encode($arr);
	mysql_close($getdb);
?>